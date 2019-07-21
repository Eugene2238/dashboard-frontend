import { Component, Input, OnInit } from '@angular/core';
import {Widget, WidgetModel} from '../../../../models/Widget';
import {Dashboard, DashboardModel} from '../../../../models/Dashboard';

@Component({
  selector: 'app-ssl-certificate',
  templateUrl: './ssl-certificate.component.html',
  styleUrls: ['./ssl-certificate.component.css']
})
export class SslCertificateComponent implements OnInit {
  @Input() widget: Widget = new WidgetModel();
  @Input() dashboard: Dashboard = new DashboardModel();
  constructor() {}

  ngOnInit() {}
}
