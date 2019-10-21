import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacDisC01Component } from './fac-dis-c01.component';

describe('FacDisC01Component', () => {
  let component: FacDisC01Component;
  let fixture: ComponentFixture<FacDisC01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacDisC01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacDisC01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
