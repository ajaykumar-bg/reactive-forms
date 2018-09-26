import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicArrayFormComponent } from './dynamic-array-form.component';

describe('DynamicArrayFormComponent', () => {
  let component: DynamicArrayFormComponent;
  let fixture: ComponentFixture<DynamicArrayFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicArrayFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicArrayFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
