import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacCienI03Component } from './fac-cien-i03.component';

describe('FacCienI03Component', () => {
  let component: FacCienI03Component;
  let fixture: ComponentFixture<FacCienI03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacCienI03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacCienI03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
