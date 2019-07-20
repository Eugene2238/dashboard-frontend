import { Component, OnInit } from '@angular/core';
import { Dashboard, DashboardModel } from '../../../models/Dashboard';
import { DashboardService } from '../../../services/dashboard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-create',
  templateUrl: './dashboard-create.component.html',
  styleUrls: ['./dashboard-create.component.css']
})
export class DashboardCreateComponent implements OnInit {
  public dashboard: Dashboard;
  public errors = [];

  constructor(private dashboardService: DashboardService, private router: Router) {}

  ngOnInit() {
    this.dashboard = new DashboardModel();
  }

  createDashboard() {
    this.dashboardService.addDashboard(this.dashboard).subscribe(
      data => {
        this.router.navigate(['/dashboard']);
      },
      (invalidResponse: any) => {
        this.errors = invalidResponse.error.errors;
      }
    );
  }
}
