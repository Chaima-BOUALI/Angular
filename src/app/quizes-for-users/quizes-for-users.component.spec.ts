import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizesForUsersComponent } from './quizes-for-users.component';

describe('QuizesForUsersComponent', () => {
  let component: QuizesForUsersComponent;
  let fixture: ComponentFixture<QuizesForUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizesForUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizesForUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
