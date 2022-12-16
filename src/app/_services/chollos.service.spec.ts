import { TestBed } from '@angular/core/testing';

import { ChollosService } from './chollos.service';

describe('ChollosService', () => {
  let service: ChollosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChollosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
