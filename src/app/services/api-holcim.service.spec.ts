import { TestBed } from '@angular/core/testing';

import { ApiHolcimService } from './api-holcim.service';

describe('ApiHolcimService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiHolcimService = TestBed.get(ApiHolcimService);
    expect(service).toBeTruthy();
  });
});
