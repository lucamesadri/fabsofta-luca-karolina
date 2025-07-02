import { TestBed } from '@angular/core/testing';

import { AmizadeService } from './amizade.service';

describe('AmizadeService', () => {
  let service: AmizadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmizadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
