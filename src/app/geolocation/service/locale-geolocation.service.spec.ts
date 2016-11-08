/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LocaleGeolocationService } from './locale-geolocation.service';

describe('Service: LocaleGeolocation', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocaleGeolocationService]
    });
  });

  it('should ...', inject([LocaleGeolocationService], (service: LocaleGeolocationService) => {
    expect(service).toBeTruthy();
  }));
});
