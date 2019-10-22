import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacEduI06Component } from './fac-edu-i06.component';

describe('FacEduI06Component', () => {
  let component: FacEduI06Component;
  let fixture: ComponentFixture<FacEduI06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacEduI06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacEduI06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
