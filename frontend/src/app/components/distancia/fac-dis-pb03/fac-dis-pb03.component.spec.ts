import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacDisPb03Component } from './fac-dis-pb03.component';

describe('FacDisPb03Component', () => {
  let component: FacDisPb03Component;
  let fixture: ComponentFixture<FacDisPb03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacDisPb03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacDisPb03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
