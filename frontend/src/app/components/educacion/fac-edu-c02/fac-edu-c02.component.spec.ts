import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacEduC02Component } from './fac-edu-c02.component';

describe('FacEduC02Component', () => {
  let component: FacEduC02Component;
  let fixture: ComponentFixture<FacEduC02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacEduC02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacEduC02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
