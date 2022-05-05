import { TestBed } from '@angular/core/testing';

import { UserRegistartionService } from './user-registartion.service';

describe('UserRegistartionService', () => {
  let service: UserRegistartionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserRegistartionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
