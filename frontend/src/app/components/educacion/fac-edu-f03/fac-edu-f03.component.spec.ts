import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacEduF03Component } from './fac-edu-f03.component';

describe('FacEduF03Component', () => {
  let component: FacEduF03Component;
  let fixture: ComponentFixture<FacEduF03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacEduF03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacEduF03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
