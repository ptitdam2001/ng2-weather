/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GoogleGeolocationService } from './google-geolocation.service';

describe('Service: GoogleGeolocation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleGeolocationService]
    });
  });

  it('should ...', inject([GoogleGeolocationService], (service: GoogleGeolocationService) => {
    expect(service).toBeTruthy();
  }));
});
