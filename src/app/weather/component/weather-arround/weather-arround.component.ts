import { OpenWeatherMapService } from '../../service/open-weather-map.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Coordinates } from '../../service/classes';

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
  @Input() height ?: number = 0;

  private weatherArround: Array<any>;
  private listStyle;
  private errorService: boolean = false;

  constructor(private service: OpenWeatherMapService) { }

  ngOnInit() {

    this.listStyle = this.height > 0 ? {'height': (this.height - 30) + 'px'} : {};
  }

  ngOnChanges(changes) {
    if (changes.coordinates.currentValue) {
      this.populate();
    }
  }

  private populate() {
    this.service.getWeatherArround(this.coordinates).subscribe(
      response => this.weatherArround = response.json().list ? response.json().list : [],
      error => {
        this.weatherArround = [];
        this.errorService = true;
      }
    );
  }

  public reload() {
    this.populate();
  }

}
