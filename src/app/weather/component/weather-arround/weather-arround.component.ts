import { OpenWeatherMapService } from '../../service/open-weather-map.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Coordinates, WeatherSearchParams } from '../../service/classes';

@Component({
  selector: 'ngw-weather-arround',
  templateUrl: './weather-arround.component.html',
  styleUrls: [
    './../../../../../node_modules/weather-icons/sass/weather-icons.scss',
    './weather-arround.component.scss'
    ]
})
export class WeatherArroundComponent implements OnInit, OnChanges {

  @Input() coordinates: Coordinates;

  private weatherArround: Array<any>;

  constructor(private service: OpenWeatherMapService) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.coordinates.currentValue) {
      this.service.getWeatherArround(this.coordinates).subscribe(response => {
        this.weatherArround = response.json().list ? response.json().list : [];
      });
    }
  }

}
