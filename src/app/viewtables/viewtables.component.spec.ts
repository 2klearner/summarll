import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtablesComponent } from './viewtables.component';

describe('ViewtablesComponent', () => {
  let component: ViewtablesComponent;
  let fixture: ComponentFixture<ViewtablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewtablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
