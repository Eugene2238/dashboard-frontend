import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificTextComponent } from './specific-text.component';
import {RouterTestingModule} from '@angular/router/testing';
import { TimeAgoPipe } from 'time-ago-pipe';

describe('SpecificTextComponent', () => {
  let component: SpecificTextComponent;
  let fixture: ComponentFixture<SpecificTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ SpecificTextComponent, TimeAgoPipe ],
      providers: [TimeAgoPipe]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
