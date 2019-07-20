import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../../services/dashboard.service';
import { Dashboard } from '../../../models/Dashboard';
import { ConfirmationDialogService } from '../../layout/confirmation-dialog/confirmation-dialog.service';


@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.css']
})
export class DashboardListComponent implements OnInit {
  dashboards: Dashboard[] = [];

  constructor(private dashboardService: DashboardService, private confirmationDialogService: ConfirmationDialogService) {}

  ngOnInit() {
    this.getDashboards();
  }

  getDashboards() {
    this.dashboardService.getDashboards().subscribe(dashboards => {
      this.dashboards = dashboards;
    });
  }

  removeDashboard(id: string) {
    this.dashboardService.removeDashboard(id).subscribe(() => {
      this.dashboards.forEach((curr, index) => {
        if (id === curr._id) {
          this.dashboards.splice(index, 1);
        }
      });
    });
  }

  public openConfirmationDialog(id: string) {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete the dashboard ?')
      .then((confirmed) => {
        if (confirmed) {this.removeDashboard(id);}
      })
      .catch(() => {});
  }

}
