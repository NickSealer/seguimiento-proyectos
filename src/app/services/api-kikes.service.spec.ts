import { TestBed } from '@angular/core/testing';

import { ApiKikesService } from './api-kikes.service';

describe('ApiKikesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiKikesService = TestBed.get(ApiKikesService);
    expect(service).toBeTruthy();
  });
});
