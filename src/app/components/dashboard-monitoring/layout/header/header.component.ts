import { Component, Input, OnInit } from '@angular/core';
import {Dashboard, DashboardModel} from '../../../../models/Dashboard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() dashboard: Dashboard = new DashboardModel();
  constructor() {}

  ngOnInit() {}
}
