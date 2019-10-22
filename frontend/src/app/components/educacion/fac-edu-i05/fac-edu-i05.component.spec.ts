import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacEduI05Component } from './fac-edu-i05.component';

describe('FacEduI05Component', () => {
  let component: FacEduI05Component;
  let fixture: ComponentFixture<FacEduI05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacEduI05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacEduI05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
