import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacEduC021Component } from './fac-edu-c021.component';

describe('FacEduC021Component', () => {
  let component: FacEduC021Component;
  let fixture: ComponentFixture<FacEduC021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacEduC021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacEduC021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
