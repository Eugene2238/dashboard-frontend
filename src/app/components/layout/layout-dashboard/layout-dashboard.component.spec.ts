import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutDashboardComponent } from './layout-dashboard.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';

describe('LayoutDashboardComponent', () => {
  let component: LayoutDashboardComponent;
  let fixture: ComponentFixture<LayoutDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutDashboardComponent ],
      imports: [ RouterTestingModule, HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
