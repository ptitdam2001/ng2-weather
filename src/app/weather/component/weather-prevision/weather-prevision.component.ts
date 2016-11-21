import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { OpenWeatherMapService } from '../../service/open-weather-map.service';
import { WeatherSearchParams, Coordinates } from '../../service/classes';

@Component({
  selector: 'ngw-weather-prevision',
  templateUrl: './weather-prevision.component.html',
  styleUrls: [
    './../../../../../node_modules/weather-icons/sass/weather-icons.scss',
    './weather-prevision.component.scss'
    ],
    providers: [
      OpenWeatherMapService
    ]
})
export class WeatherPrevisionComponent implements OnInit, OnChanges {

  @Input() city: string;

  @Input() coordinates ?: Coordinates;

  public weathers;

  constructor(private service: OpenWeatherMapService) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    let options = new WeatherSearchParams();

    if (changes.city && changes.city.currentValue) {
      options.city = this.city;

      this.service.getForecast(options).subscribe(response => {
        this.weathers = response.json().list;
      });

    } else if (changes.coordinates && changes.coordinates.currentValue) {
      options.coordinates = this.coordinates;

      this.service.getForecast(options).subscribe(response => {
        this.weathers = response.json().list;
      });
    }
  }

}
