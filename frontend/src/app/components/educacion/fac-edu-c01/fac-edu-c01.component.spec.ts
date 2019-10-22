import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacEduC01Component } from './fac-edu-c01.component';

describe('FacEduC01Component', () => {
  let component: FacEduC01Component;
  let fixture: ComponentFixture<FacEduC01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacEduC01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacEduC01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
