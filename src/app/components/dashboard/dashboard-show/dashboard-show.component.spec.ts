import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardShowComponent } from './dashboard-show.component';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';

describe('DashboardShowComponent', () => {
  let component: DashboardShowComponent;
  let fixture: ComponentFixture<DashboardShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardShowComponent ],
      imports: [ FormsModule, RouterTestingModule, HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
