import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacCienI06Component } from './fac-cien-i06.component';

describe('FacCienI06Component', () => {
  let component: FacCienI06Component;
  let fixture: ComponentFixture<FacCienI06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacCienI06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacCienI06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
