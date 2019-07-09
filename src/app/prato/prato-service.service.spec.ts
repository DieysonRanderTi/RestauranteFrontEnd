import { TestBed } from '@angular/core/testing';

import { PratoServiceService } from './prato-service.service';

describe('PratoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PratoServiceService = TestBed.get(PratoServiceService);
    expect(service).toBeTruthy();
  });
});
