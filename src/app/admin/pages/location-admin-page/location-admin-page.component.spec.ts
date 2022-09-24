import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationAdminPageComponent } from './location-admin-page.component';

describe('LocationAdminPageComponent', () => {
  let component: LocationAdminPageComponent;
  let fixture: ComponentFixture<LocationAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
