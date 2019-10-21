import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacDisC02Component } from './fac-dis-c02.component';

describe('FacDisC02Component', () => {
  let component: FacDisC02Component;
  let fixture: ComponentFixture<FacDisC02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacDisC02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacDisC02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
