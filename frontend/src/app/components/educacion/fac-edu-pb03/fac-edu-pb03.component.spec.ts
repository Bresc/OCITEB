import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacEduPb03Component } from './fac-edu-pb03.component';

describe('FacEduPb03Component', () => {
  let component: FacEduPb03Component;
  let fixture: ComponentFixture<FacEduPb03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacEduPb03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacEduPb03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
