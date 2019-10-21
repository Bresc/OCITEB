import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacAgroI03Component } from './fac-agro-i03.component';

describe('FacAgroI03Component', () => {
  let component: FacAgroI03Component;
  let fixture: ComponentFixture<FacAgroI03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacAgroI03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacAgroI03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
