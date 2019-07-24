import { TestBed } from '@angular/core/testing';

import { ApiEstelarService } from './api-estelar.service';

describe('ApiEstelarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiEstelarService = TestBed.get(ApiEstelarService);
    expect(service).toBeTruthy();
  });
});
