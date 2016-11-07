import { GeolocationModule } from './geolocation/geolocation.module';
import { WeatherModule } from './weather/weather.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WeatherModule,
    GeolocationModule.forRoot({key: 'AIzaSyDjDEkj5MloWhk9SBkZA37olm6qtwIekY4', format: 'json'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
