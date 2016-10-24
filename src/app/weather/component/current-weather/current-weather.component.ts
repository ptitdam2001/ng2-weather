import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { OpenWeatherMapService } from '../../service/open-weather-map.service';
import { WeatherSearchParams } from '../../service/classes';

@Component({
  selector: 'ngw-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss'],
  providers: [
    OpenWeatherMapService
  ]
})
export class CurrentWeatherComponent implements OnInit, OnChanges {

  @Input() city: string;

  public currentWeather;

  constructor(private service: OpenWeatherMapService) { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.city.currentValue) {
      let options = new WeatherSearchParams();

      options.city = this.city;

      this.service.getCurrentWeather(options).subscribe(response => {
        this.currentWeather = response.json();

        console.log(this.currentWeather, this.currentWeather.name);
      });
    }
  }
}
