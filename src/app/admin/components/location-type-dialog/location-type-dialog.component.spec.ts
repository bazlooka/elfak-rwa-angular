import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationTypeDialogComponent } from './location-type-dialog.component';

describe('CreateLocationTypeDialogComponent', () => {
  let component: LocationTypeDialogComponent;
  let fixture: ComponentFixture<LocationTypeDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationTypeDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LocationTypeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
