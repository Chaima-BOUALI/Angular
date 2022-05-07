import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDialogQuizComponent } from './modify-dialog-quiz.component';

describe('ModifyDialogQuizComponent', () => {
  let component: ModifyDialogQuizComponent;
  let fixture: ComponentFixture<ModifyDialogQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyDialogQuizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDialogQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
