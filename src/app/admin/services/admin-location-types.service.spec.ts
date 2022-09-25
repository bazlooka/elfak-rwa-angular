import { TestBed } from '@angular/core/testing';

import { AdminLocationTypesService } from './admin-location-types.service';

describe('AdminLocationTypesService', () => {
  let service: AdminLocationTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminLocationTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
