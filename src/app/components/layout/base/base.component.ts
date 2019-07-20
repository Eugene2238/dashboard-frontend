import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: [
    './base.component.css',
    '../../../../assets/lib/loaders.css/loaders.min.css',
    // 'https://fonts.googleapis.com/css?family=PT+Mono%7cPT+Serif:400,400i%7cLato:100,300,400,700,800,900',
    '../../../../assets/lib/remodal/remodal.css',
    '../../../../assets/lib/remodal/remodal-default-theme.css',
    '../../../../assets/css/theme.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class BaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
