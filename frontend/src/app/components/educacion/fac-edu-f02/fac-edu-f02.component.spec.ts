import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacEduF02Component } from './fac-edu-f02.component';

describe('FacEduF02Component', () => {
  let component: FacEduF02Component;
  let fixture: ComponentFixture<FacEduF02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacEduF02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacEduF02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
