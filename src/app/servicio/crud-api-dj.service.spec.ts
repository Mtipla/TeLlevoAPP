import { TestBed } from '@angular/core/testing';

import { CrudApiDjService } from './crud-api-dj.service';

describe('CrudApiDjService', () => {
  let service: CrudApiDjService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudApiDjService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
