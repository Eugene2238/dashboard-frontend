import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SslCertificateComponent } from './ssl-certificate.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { TimeAgoPipe } from 'time-ago-pipe';

describe('SslCertificateComponent', () => {
  let component: SslCertificateComponent;
  let fixture: ComponentFixture<SslCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule, HttpClientModule],
      declarations: [ SslCertificateComponent, TimeAgoPipe ],
      providers: [TimeAgoPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SslCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
