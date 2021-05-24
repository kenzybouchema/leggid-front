import { TestBed } from '@angular/core/testing';

import { SubleggidService } from './subleggid.service';

describe('SubleggidService', () => {
  let service: SubleggidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubleggidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
