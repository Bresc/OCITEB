import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacAgroF01Component } from './fac-agro-f01.component';

describe('FacAgroF01Component', () => {
  let component: FacAgroF01Component;
  let fixture: ComponentFixture<FacAgroF01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacAgroF01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacAgroF01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
