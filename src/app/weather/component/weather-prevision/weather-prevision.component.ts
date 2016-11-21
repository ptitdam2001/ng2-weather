import { Forecast, ForecastItem } from '../../models/forecast';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { OpenWeatherMapService } from '../../service/open-weather-map.service';
import { WeatherSearchParams, Coordinates } from '../../service/classes';
import * as moment from 'moment/moment';

import 'rxjs/add/observable/interval';
import { Observable } from 'rxjs';

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
  @Input() height ?: number = 300;
  @Input() refreshMin ?: number = 1;

  public weathers;
  private scrollStyle: string;

  constructor(private service: OpenWeatherMapService) { }

  ngOnInit() {
    this.scrollStyle = (this.height - 30) + 'px' ;
  }

  ngOnChanges(changes) {
    let options = new WeatherSearchParams();

    if (changes.city && changes.city.currentValue) {
      options.city = this.city;
    } else if (changes.coordinates && changes.coordinates.currentValue) {
      options.coordinates = this.coordinates;
    }
    if (options.coordinates || options.coordinates) {
      this.getObservableFlow(options).subscribe(
        response => this._populateForecast(response),
        error => this._populateForecast([])
      );
      this.populate(options);
    }
  }

  private _populateForecast(data) {
    let forecastF: Array<Forecast> = new Array();

    for (let elt of data) {
      if (forecastF.length === 0) {
        let add = new Forecast(elt.date);
        add.addToList(elt);
        forecastF[forecastF.length] = add;
      }

      if (forecastF.length > 0) {
        let found = forecastF.find(predicate => elt.date === predicate.date);
        let foundIndex = forecastF.findIndex(predicate => elt.date === predicate.date);

        if (found) {
          found.addToList(elt);
          forecastF[foundIndex] = found;
        } else {
          let add = new Forecast(elt.date);
          add.addToList(elt);
          forecastF[forecastF.length] = add;
        }
      }
    }

    this.weathers = forecastF;
  }

  private getObservableFlow(options: WeatherSearchParams) {
    return this.service.getForecast(options)
      .map(response => {
        return response.json().list.map(item => {
          let ret = item as ForecastItem;
          ret.date = moment(ret.dt * 1000).format('YYYY-MM-DD');
          return ret;
        });
      });
  }

  private populate(options: WeatherSearchParams) {
    this.weathers = [];

    return Observable
      .interval(this.refreshMin * 60000)
      .flatMap(() => this.getObservableFlow(options))
      .subscribe(response => this._populateForecast(response));
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
