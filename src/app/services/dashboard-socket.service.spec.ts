import { TestBed } from '@angular/core/testing';

import { DashboardSocketService } from './dashboard-socket.service';

describe('DashboardSocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DashboardSocketService = TestBed.get(DashboardSocketService);
    expect(service).toBeTruthy();
  });
});
