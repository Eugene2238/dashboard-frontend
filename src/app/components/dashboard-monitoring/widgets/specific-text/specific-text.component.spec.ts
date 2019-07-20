import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificTextComponent } from './specific-text.component';

describe('SpecificTextComponent', () => {
  let component: SpecificTextComponent;
  let fixture: ComponentFixture<SpecificTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecificTextComponent ]
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
