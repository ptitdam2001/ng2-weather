import { OpenWeatherMapService } from './service/open-weather-map.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentWeatherComponent, WeatherArroundComponent, WeatherPrevisionComponent } from './component/index';
import { MeterSecToKmHourPipe } from './pipe/meter-sec-to-km-hour.pipe';
import { RoundPipe } from './pipe/round.pipe';
import { WeatherNameToIconPipe } from './pipe/weather-name-to-icon.pipe';
import { WeatherConfig } from './weather-config';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CurrentWeatherComponent,
    WeatherArroundComponent,
    WeatherPrevisionComponent,
    MeterSecToKmHourPipe,
    RoundPipe,
    WeatherNameToIconPipe
  ],
  providers: [
    OpenWeatherMapService
  ],
  exports: [
    CurrentWeatherComponent,
    WeatherArroundComponent,
    WeatherPrevisionComponent,
    MeterSecToKmHourPipe,
    WeatherNameToIconPipe,
    RoundPipe
  ]
})
export class WeatherModule {
  static forRoot(config: WeatherConfig): ModuleWithProviders {
    return {
      ngModule: WeatherModule,
      providers: [
        {provide: WeatherConfig, useValue: config }
      ]
    };
  }
}
