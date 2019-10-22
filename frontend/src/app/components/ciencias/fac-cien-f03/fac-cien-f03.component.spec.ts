import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacCienF03Component } from './fac-cien-f03.component';

describe('FacCienF03Component', () => {
  let component: FacCienF03Component;
  let fixture: ComponentFixture<FacCienF03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacCienF03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacCienF03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
