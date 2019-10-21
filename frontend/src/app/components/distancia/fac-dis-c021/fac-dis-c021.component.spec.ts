import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacDisC021Component } from './fac-dis-c021.component';

describe('FacDisC021Component', () => {
  let component: FacDisC021Component;
  let fixture: ComponentFixture<FacDisC021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacDisC021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacDisC021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
