import { TestBed } from '@angular/core/testing';

import { ReflectorService } from './reflector.service';

describe('ReflectorService', () => {
  let service: ReflectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReflectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
