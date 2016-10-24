import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { WeatherSearchParams } from './classes';

const API_KEY = '59fd2768e2c9abcb3cf35e48643a34f5';

const API_URL = 'http://api.openweathermap.org/data/2.5/';

@Injectable()
export class OpenWeatherMapService {

  private url: string = API_URL + 'weather';

  constructor(private http: Http) { }

  /**
   * Get the current weather
   * @params params WeatherSearchParams
   * @return Observable<Response>
   */
  getCurrentWeather(params: WeatherSearchParams) {
    let options = params.toUrlSearchParams(API_KEY);
    return this.http.get(this.url, {search: options});
  }
}
