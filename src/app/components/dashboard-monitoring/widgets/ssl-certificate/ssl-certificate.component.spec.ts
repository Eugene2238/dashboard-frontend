import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SslCertificateComponent } from './ssl-certificate.component';

describe('SslCertificateComponent', () => {
  let component: SslCertificateComponent;
  let fixture: ComponentFixture<SslCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SslCertificateComponent ]
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
