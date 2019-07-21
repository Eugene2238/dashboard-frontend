import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardListComponent } from './dashboard-list.component';
import {FormsModule} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {ConfirmationDialogService} from '../../layout/confirmation-dialog/confirmation-dialog.service';

describe('DashboardListComponent', () => {
  let component: DashboardListComponent;
  let fixture: ComponentFixture<DashboardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardListComponent ],
      imports: [ FormsModule, RouterTestingModule, HttpClientModule],
      providers: [ConfirmationDialogService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
