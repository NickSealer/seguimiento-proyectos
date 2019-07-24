import { TestBed } from '@angular/core/testing';

import { ApiNormaService } from './api-norma.service';

describe('ApiNormaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiNormaService = TestBed.get(ApiNormaService);
    expect(service).toBeTruthy();
  });
});
