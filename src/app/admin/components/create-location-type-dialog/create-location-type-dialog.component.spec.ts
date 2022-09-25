import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLocationTypeDialogComponent } from './create-location-type-dialog.component';

describe('CreateLocationTypeDialogComponent', () => {
  let component: CreateLocationTypeDialogComponent;
  let fixture: ComponentFixture<CreateLocationTypeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLocationTypeDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLocationTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
