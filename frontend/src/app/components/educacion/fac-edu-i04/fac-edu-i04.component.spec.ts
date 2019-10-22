import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacEduI04Component } from './fac-edu-i04.component';

describe('FacEduI04Component', () => {
  let component: FacEduI04Component;
  let fixture: ComponentFixture<FacEduI04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacEduI04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacEduI04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
