import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacAgroC021Component } from './fac-agro-c021.component';

describe('FacAgroC021Component', () => {
  let component: FacAgroC021Component;
  let fixture: ComponentFixture<FacAgroC021Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacAgroC021Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacAgroC021Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
