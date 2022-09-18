import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingLocationsComponent } from './trending-locations.component';

describe('TrendingLocationsComponent', () => {
  let component: TrendingLocationsComponent;
  let fixture: ComponentFixture<TrendingLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingLocationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
