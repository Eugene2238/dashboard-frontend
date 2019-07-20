import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { Dashboard, DashboardModel } from '../../../models/Dashboard';
import { DashboardService } from '../../../services/dashboard.service';
import { DashboardSocketService } from '../../../services/dashboard-socket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit, OnDestroy {
  public errors = [];
  dashboard: Dashboard = new DashboardModel();
  private dashboardSub: Subscription;


  constructor(private route: ActivatedRoute, private dashboardService: DashboardService,
              private router: Router, private dashboardSocketService: DashboardSocketService) {}

  ngOnInit() {
    this.dashboardSocketService.getDashboard(this.route.snapshot.paramMap.get('id'));
    this.dashboardSub = this.dashboardSocketService.dashboard.subscribe(dashboard => this.dashboard = dashboard);
  }

  ngOnDestroy() {
    this.dashboardSub.unsubscribe();
  }

}
