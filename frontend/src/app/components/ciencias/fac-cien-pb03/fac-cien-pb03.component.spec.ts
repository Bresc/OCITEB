import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacCienPb03Component } from './fac-cien-pb03.component';

describe('FacCienPb03Component', () => {
  let component: FacCienPb03Component;
  let fixture: ComponentFixture<FacCienPb03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacCienPb03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacCienPb03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
