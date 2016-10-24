import { OpenWeatherMapService } from './service/open-weather-map.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWeatherComponent, WeatherArroundComponent, WeatherPrevisionComponent } from './component/index';
import { MeterSecToKmHourPipe } from './pipe/meter-sec-to-km-hour.pipe';
import { RoundPipe } from './pipe/round.pipe';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CurrentWeatherComponent,
    WeatherArroundComponent,
    WeatherPrevisionComponent,
    MeterSecToKmHourPipe,
    RoundPipe
  ],
  providers: [
    OpenWeatherMapService
  ],
  exports: [
    CurrentWeatherComponent,
    WeatherArroundComponent,
    WeatherPrevisionComponent,
    MeterSecToKmHourPipe,
    RoundPipe
  ]
})
export class WeatherModule { }
