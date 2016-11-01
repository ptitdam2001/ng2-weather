import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'location-search-bar',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss']
})
export class LocationSearchComponent implements OnInit, OnChanges {

  public inputLocation;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(change) {

  }

}
