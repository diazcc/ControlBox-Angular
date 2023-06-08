import { TestBed } from '@angular/core/testing';

import { ControlBoxService } from './control-box.service';

describe('ControlBoxService', () => {
  let service: ControlBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
