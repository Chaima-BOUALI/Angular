import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDialogFormComponent } from './modify-dialog-form.component';

describe('ModifyDialogFormComponent', () => {
  let component: ModifyDialogFormComponent;
  let fixture: ComponentFixture<ModifyDialogFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyDialogFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
