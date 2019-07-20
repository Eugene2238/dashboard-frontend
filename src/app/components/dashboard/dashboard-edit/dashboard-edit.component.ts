import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from '../../../services/dashboard.service';

import { Dashboard, DashboardModel } from '../../../models/Dashboard';

@Component({
  selector: 'app-dashboard-edit',
  templateUrl: './dashboard-edit.component.html',
  styleUrls: ['./dashboard-edit.component.css']
})
export class DashboardEditComponent implements OnInit {
  dashboard: Dashboard;
  public errors = [];

  constructor(private router: Router, private route: ActivatedRoute, private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboard = new DashboardModel();
    this.getDashboard(this.route.snapshot.paramMap.get('id'));
  }

  editDashboard() {
    this.dashboardService.editDashboard(this.dashboard).subscribe(
      data => {
        this.router.navigate(['/dashboard']);
      },
      (invalidResponse: any) => {
        this.errors = invalidResponse.error.errors;
      }
    );
  }

  getDashboard(id: string) {
    this.dashboardService.getDashboard(id).subscribe(data => {
      this.dashboard = data;
    });
  }
}
