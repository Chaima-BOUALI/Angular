import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlystatComponent } from './monthlystat.component';

describe('MonthlystatComponent', () => {
  let component: MonthlystatComponent;
  let fixture: ComponentFixture<MonthlystatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlystatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlystatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
