import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacCienI04Component } from './fac-cien-i04.component';

describe('FacCienI04Component', () => {
  let component: FacCienI04Component;
  let fixture: ComponentFixture<FacCienI04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacCienI04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacCienI04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
