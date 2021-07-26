import { TestBed } from '@angular/core/testing';

import { NaviGuard } from './navi.guard';

describe('NaviGuard', () => {
  let guard: NaviGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NaviGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
