import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtablesComponent } from './addtables.component';

describe('AddtablesComponent', () => {
  let component: AddtablesComponent;
  let fixture: ComponentFixture<AddtablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddtablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
