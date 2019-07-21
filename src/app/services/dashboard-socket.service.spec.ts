import { TestBed } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';
import { DashboardSocketService } from './dashboard-socket.service';
import {UserService} from './user.service';


describe('DashboardSocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule],
    providers: [UserService]
  }));

  xit('should be created', () => {
    const service: DashboardSocketService = TestBed.get(DashboardSocketService);
    expect(service).toBeTruthy();
  });
});
