import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyDialogPartnershipsComponent } from './modify-dialog-partnerships.component';

describe('ModifyDialogPartnershipsComponent', () => {
  let component: ModifyDialogPartnershipsComponent;
  let fixture: ComponentFixture<ModifyDialogPartnershipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifyDialogPartnershipsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyDialogPartnershipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
