import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import {HeaderComponent} from '../layout/header/header.component';
import { SpecificTextComponent } from '../widgets/specific-text/specific-text.component';
import {SslCertificateComponent} from '../widgets/ssl-certificate/ssl-certificate.component';
import {RouterTestingModule} from '@angular/router/testing';
import { TimeAgoPipe } from 'time-ago-pipe';
import {HttpClientModule} from '@angular/common/http';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, HeaderComponent, SpecificTextComponent, SslCertificateComponent, TimeAgoPipe],
      imports: [ RouterTestingModule, HttpClientModule ],
      providers: [TimeAgoPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
