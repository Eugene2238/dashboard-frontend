import { Component, Input, OnInit } from '@angular/core';
import { Widget } from '../../../../models/Widget';
import { Dashboard } from '../../../../models/Dashboard';

@Component({
  selector: 'app-specific-text',
  templateUrl: './specific-text.component.html',
  styleUrls: ['./specific-text.component.css']
})
export class SpecificTextComponent implements OnInit {
  @Input() widget: Widget;
  @Input() dashboard: Dashboard;
  constructor() {}

  ngOnInit() {}
}
