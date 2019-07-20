import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Dashboard } from '../models/Dashboard';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getDashboard(id: string) {
    return this.http.get<Dashboard>('/api/dashboard/' + id);
  }

  getDashboards() {
    return this.http.get<Dashboard[]>('/api/dashboard');
  }

  addDashboard(newDashboard: Dashboard) {
    return this.http.post<Dashboard>('/api/dashboard', newDashboard);
  }

  removeDashboard(id: string) {
    return this.http.delete<Dashboard>('/api/dashboard/' + id);
  }

  editDashboard(dashboard: Dashboard) {
    return this.http.put<Dashboard>('/api/dashboard/' + dashboard._id, dashboard);
  }
}
