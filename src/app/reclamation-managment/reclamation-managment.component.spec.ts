import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationManagmentComponent } from './reclamation-managment.component';

describe('ReclamationManagmentComponent', () => {
  let component: ReclamationManagmentComponent;
  let fixture: ComponentFixture<ReclamationManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamationManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
