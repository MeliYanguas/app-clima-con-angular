import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey = '587d4793503814f89bde6b7bc2b001ad'
  URI : string = ''
  constructor(private http: HttpClient) {
    this.URI = `http://api.openweathermap.org/data/2.5/weather?&appid=${this.apiKey}&units=metric&q=`
   }
   getWeather(cityName: string, countryCode: string){
    return this.http.get(`${this.URI}${cityName},${countryCode}`);
   }
}
