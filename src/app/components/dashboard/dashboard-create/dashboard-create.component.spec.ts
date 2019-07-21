import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCreateComponent } from './dashboard-create.component';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';


describe('DashboardCreateComponent', () => {
  let component: DashboardCreateComponent;
  let fixture: ComponentFixture<DashboardCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCreateComponent ],
      imports: [ FormsModule, RouterTestingModule, HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
