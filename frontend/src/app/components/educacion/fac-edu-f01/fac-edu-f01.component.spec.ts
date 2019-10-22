import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacEduF01Component } from './fac-edu-f01.component';

describe('FacEduF01Component', () => {
  let component: FacEduF01Component;
  let fixture: ComponentFixture<FacEduF01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacEduF01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacEduF01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
