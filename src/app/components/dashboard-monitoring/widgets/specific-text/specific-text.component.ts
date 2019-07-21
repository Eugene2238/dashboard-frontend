import { Component, Input, OnInit } from '@angular/core';
import { Widget, WidgetModel } from '../../../../models/Widget';
import {Dashboard, DashboardModel} from '../../../../models/Dashboard';


@Component({
  selector: 'app-specific-text',
  templateUrl: './specific-text.component.html',
  styleUrls: ['./specific-text.component.css']
})
export class SpecificTextComponent implements OnInit {
  @Input() widget: Widget = new WidgetModel();
  @Input() dashboard: Dashboard = new DashboardModel();
  constructor() {}

  ngOnInit() {}
}
