import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchtablesComponent } from './searchtables.component';

describe('SearchtablesComponent', () => {
  let component: SearchtablesComponent;
  let fixture: ComponentFixture<SearchtablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchtablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchtablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
