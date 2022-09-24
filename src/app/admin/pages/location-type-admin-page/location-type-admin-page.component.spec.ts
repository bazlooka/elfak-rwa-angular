import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationTypeAdminPageComponent } from './location-type-admin-page.component';

describe('LocationTypeAdminPageComponent', () => {
  let component: LocationTypeAdminPageComponent;
  let fixture: ComponentFixture<LocationTypeAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationTypeAdminPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationTypeAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
