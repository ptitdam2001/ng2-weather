import { Http, URLSearchParams } from '@angular/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { WeatherSearchParams, Coordinates } from './classes';
import { WeatherConfig } from '../weather-config';

const API_URL = 'http://api.openweathermap.org/data/2.5/';

@Injectable()
export class OpenWeatherMapService {

  private url: string = API_URL + 'weather';
  private findUrl: string = API_URL + 'find';
  private http: Http;
  private key: string;

  constructor(@Inject(Http) http: Http, @Optional() config: WeatherConfig) {
    this.http = http;
    if (config) {
      this.key = config.key;
    }
  }

  /**
   * Get the current weather
   * @params params WeatherSearchParams
   * @return Observable<Response>
   */
  getCurrentWeather(params: WeatherSearchParams) {
    let options = params.toUrlSearchParams(this.key);
    return this.http.get(this.url, {search: options});
  }

  /**
   * Get the weather arround a given coordinate
   * @params coordinates Coordinates
   * @params count number
   * @return Observable<Response>
   */
  getWeatherArround(coordinates: Coordinates, count = 10) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('lon', coordinates.lon.toString());
    params.set('lat', coordinates.lat.toString());
    params.set('cnt', count.toString());
    params.set('appid', this.key);
    params.set('units', 'metric');

    return this.http.get(this.findUrl, {search: params});
  }
}
