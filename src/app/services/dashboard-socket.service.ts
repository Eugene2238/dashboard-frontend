import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

import { Dashboard } from '../models/Dashboard';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardSocketService {
  dashboard = this.socket.fromEvent<Dashboard>('dashboard');
  constructor(private socket: Socket, private auth: UserService) {}

  getDashboard(id: string) {
    this.socket.emit('dashboard', {id, token: this.auth.getAuthToken()});
  }

}
