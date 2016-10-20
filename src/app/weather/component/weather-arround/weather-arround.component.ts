import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ngw-weather-arround',
  templateUrl: './weather-arround.component.html',
  styleUrls: ['./weather-arround.component.scss']
})
export class WeatherArroundComponent implements OnInit {

  @Input() city: string;
  
  constructor() { }

  ngOnInit() {
  }

}
