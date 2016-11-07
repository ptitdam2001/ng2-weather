import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngw-weather-prevision',
  templateUrl: './weather-prevision.component.html',
  styleUrls: ['./weather-prevision.component.scss']
})
export class WeatherPrevisionComponent implements OnInit {

  @Input() city: string;

  constructor() { }

  ngOnInit() {
  }

}
