import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DashboardService } from '../../../services/dashboard.service';

import { Dashboard } from '../../../models/Dashboard';

@Component({
  selector: 'app-dashboard-show',
  templateUrl: './dashboard-show.component.html',
  styleUrls: ['./dashboard-show.component.css']
})
export class DashboardShowComponent implements OnInit {
  dashboard: Dashboard;
  public errors = [];

  constructor(private route: ActivatedRoute, private dashboardService: DashboardService) {}

  ngOnInit() {
    this.getDashboard(this.route.snapshot.paramMap.get('id'));
  }

  getDashboard(id: string) {
    this.dashboardService.getDashboard(id).subscribe(
      data => {
        this.dashboard = data;
      },
      (invalidResponse: any) => {
        this.errors = invalidResponse.error.errors;
      }
    );
  }
}
