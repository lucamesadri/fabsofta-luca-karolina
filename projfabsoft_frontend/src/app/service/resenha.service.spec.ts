import { TestBed } from '@angular/core/testing';

import { ResenhaService } from './resenha.service';

describe('ResenhaService', () => {
  let service: ResenhaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResenhaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
