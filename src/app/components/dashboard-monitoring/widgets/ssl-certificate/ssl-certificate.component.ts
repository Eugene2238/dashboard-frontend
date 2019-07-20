import { Component, Input, OnInit } from '@angular/core';
import { Widget } from '../../../../models/Widget';
import { Dashboard } from '../../../../models/Dashboard';

@Component({
  selector: 'app-ssl-certificate',
  templateUrl: './ssl-certificate.component.html',
  styleUrls: ['./ssl-certificate.component.css']
})
export class SslCertificateComponent implements OnInit {
  @Input() widget: Widget;
  @Input() dashboard: Dashboard;
  constructor() {}

  ngOnInit() {}
}
