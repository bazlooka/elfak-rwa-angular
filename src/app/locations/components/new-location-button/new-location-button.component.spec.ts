import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLocationButtonComponent } from './new-location-button.component';

describe('NewLocationButtonComponent', () => {
  let component: NewLocationButtonComponent;
  let fixture: ComponentFixture<NewLocationButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLocationButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLocationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
