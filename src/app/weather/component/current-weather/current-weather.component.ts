import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { OpenWeatherMapService } from '../../service/open-weather-map.service';
import { WeatherSearchParams, Coordinates } from '../../service/classes';

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

  public currentWeather;

  constructor(private service: OpenWeatherMapService) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    let options = new WeatherSearchParams();

    if (changes.city.currentValue) {
      options.city = this.city;

      this.service.getCurrentWeather(options).subscribe(response => {
        this.currentWeather = response.json();
      });

    } else if (changes.coordinates.currentValue) {
      options.coordinates = this.coordinates;

      this.service.getCurrentWeather(options).subscribe(response => {
        this.currentWeather = response.json();
      });
    }
  }
}
