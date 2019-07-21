import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Dashboard } from '../models/Dashboard';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getDashboard(id: string) {
    return this.http.get<Dashboard>(environment.baseUrl + 'api/dashboard/' + id);
  }

  getDashboards() {
    return this.http.get<Dashboard[]>(environment.baseUrl + 'api/dashboard');
  }

  addDashboard(newDashboard: Dashboard) {
    return this.http.post<Dashboard>(environment.baseUrl + 'api/dashboard', newDashboard);
  }

  removeDashboard(id: string) {
    return this.http.delete<Dashboard>(environment.baseUrl + 'api/dashboard/' + id);
  }

  editDashboard(dashboard: Dashboard) {
    return this.http.put<Dashboard>(environment.baseUrl + 'api/dashboard/' + dashboard._id, dashboard);
  }
}
