import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { OpenWeatherMapService } from '../../service/open-weather-map.service';
import { WeatherSearchParams, Coordinates } from '../../service/classes';

import 'rxjs/add/observable/interval';
import { Observable } from 'rxjs';

@Component({
  selector: 'ngw-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: [
    './../../../../../node_modules/weather-icons/sass/weather-icons.scss',
    './current-weather.component.scss'
  ],
  providers: [
    OpenWeatherMapService
  ]
})
export class CurrentWeatherComponent implements OnInit, OnChanges {

  @Input() city: string;
  @Input() coordinates ?: Coordinates;
  @Input() refreshMin ?: number = 1;

  public currentWeather;

  constructor(private service: OpenWeatherMapService) { }

  ngOnInit() {
  }


  ngOnChanges(changes) {
    let options = new WeatherSearchParams();

    if (changes.city && changes.city.currentValue) {
      options.city = this.city;
    } else if (changes.coordinates && changes.coordinates.currentValue) {
      options.coordinates = this.coordinates;
    }

    if (options.city || options.coordinates) {
      // get data at first
      this.service.getCurrentWeather(options).subscribe(
        response => {
          this.currentWeather = response.json();
          this.populate(options);
        },
        error => {
          this.currentWeather = { weather: [] };
          this.populate(options);
        }
      );
    }
  }

  /**
   * function which gets the current weather each x minutes
   */
  private populate(options: WeatherSearchParams) {
    return Observable.interval(this.refreshMin * 60000)
      .flatMap(() => this.service.getCurrentWeather(options))
      .subscribe(
        response => this.currentWeather = response.json(),
        error => this.currentWeather = { weather: [] }
      );
  }
}
