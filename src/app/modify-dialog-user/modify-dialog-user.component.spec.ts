import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDialogUserComponent } from './modify-dialog-user.component';

describe('ModifyDialogUserComponent', () => {
  let component: ModifyDialogUserComponent;
  let fixture: ComponentFixture<ModifyDialogUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyDialogUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDialogUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
