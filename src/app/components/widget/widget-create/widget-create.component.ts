import { Component, OnInit } from '@angular/core';
import { Category } from '../../../models/Category';
import { Template } from '../../../models/Template';
import { WidgetService } from '../../../services/widget.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Widget, WidgetModel } from '../../../models/Widget';
import { DashboardService } from '../../../services/dashboard.service';
import { Dashboard, DashboardModel } from '../../../models/Dashboard';
import { WidgetSettings, WidgetSettingsModel } from '../../../models/WidgetSettings';
import { ConfirmationDialogService } from '../../layout/confirmation-dialog/confirmation-dialog.service';

@Component({
  selector: 'app-widget-create',
  templateUrl: './widget-create.component.html',
  styleUrls: ['./widget-create.component.css']
})
export class WidgetCreateComponent implements OnInit {
  public editMode = false;
  public widget: Widget;
  public categories: Category[] = [];
  public activeCategory = 0;
  public activeTemplate: Template;
  public errors = [];

  constructor(
    private widgetService: WidgetService,
    private router: Router,
    private route: ActivatedRoute,
    private dashboardService: DashboardService,
    private confirmationDialogService: ConfirmationDialogService
  ) {}

  ngOnInit() {
    this.widget = new WidgetModel();
    this.widget.dashboard = new DashboardModel();
    this.widget.settings = new WidgetSettingsModel();
    this.getWidget();
    this.getDashboard();
    this.getTemplates();
  }

  getTemplates() {
    this.widgetService.getTemplates().subscribe(
      data => {
        this.categories = data;
      },
      (invalidResponse: any) => {}
    );
  }

  getDashboard() {
    this.dashboardService.getDashboard(this.route.snapshot.paramMap.get('id')).subscribe(data => {
      this.widget.dashboard = data;
    });
  }

  changeCategory(active: number) {
    this.activeCategory = active;
    this.activeTemplate = null;
  }

  changeWidget(template: Template) {
    this.activeTemplate = template;
  }

  createWidget() {
    this.widget.template = this.activeTemplate;
    this.widgetService.addWidget(this.widget).subscribe(
      data => {
        this.router.navigate(['/dashboard']);
      },
      (invalidResponse: any) => {
        this.errors = invalidResponse.error.errors;
      }
    );
  }

  getWidget() {
    if (this.route.snapshot.paramMap.get('idWidget')) {
      this.widgetService.getWidget(this.route.snapshot.paramMap.get('idWidget')).subscribe(
        data => {
          this.widget = data;
          this.activeTemplate = data.template;
          this.editMode = true;
        },
        (invalidResponse: any) => {
          this.errors = invalidResponse.error.errors;
        }
      );
    }
  }

  public openConfirmationDialog(id: string) {
    this.confirmationDialogService
      .confirm('Please confirm..', 'Do you really want to delete the widget ?')
      .then(confirmed => {
        if (confirmed) {
          this.removeWidget(id);
        }
      })
      .catch(() => {});
  }

  removeWidget(id: string) {
    this.widgetService.removeWidget(id).subscribe(() => {
      this.router.navigate(['/dashboard']);
    });
  }

  editWidget() {
    this.widgetService.editWidget(this.widget).subscribe(
      data => {
        this.router.navigate(['/dashboard']);
      },
      (invalidResponse: any) => {
        this.errors = invalidResponse.error.errors;
      }
    );
  }

}
