import { TestBed } from '@angular/core/testing';

import { LoginWardGuard } from './login-ward.guard';

describe('LoginWardGuard', () => {
  let guard: LoginWardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoginWardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
