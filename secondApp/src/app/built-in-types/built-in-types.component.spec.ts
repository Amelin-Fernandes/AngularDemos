import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInTypesComponent } from './built-in-types.component';

describe('BuiltInTypesComponent', () => {
  let component: BuiltInTypesComponent;
  let fixture: ComponentFixture<BuiltInTypesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuiltInTypesComponent]
    });
    fixture = TestBed.createComponent(BuiltInTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
