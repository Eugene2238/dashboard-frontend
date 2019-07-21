import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { WidgetCreateComponent } from './widget-create.component';
import {RouterTestingModule} from '@angular/router/testing';
import {ConfirmationDialogService} from '../../layout/confirmation-dialog/confirmation-dialog.service';

describe('WidgetCreateComponent', () => {
  let component: WidgetCreateComponent;
  let fixture: ComponentFixture<WidgetCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetCreateComponent ],
      imports: [ FormsModule, RouterTestingModule, HttpClientTestingModule ],
      providers: [ConfirmationDialogService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
