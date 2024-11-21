import { TestBed } from '@angular/core/testing';

import { AuthcorreoService } from './authcorreo.service';

describe('AuthcorreoService', () => {
  let service: AuthcorreoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthcorreoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
