import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingLocationCardComponent } from './trending-location-card.component';

describe('TrendingLocationCardComponent', () => {
  let component: TrendingLocationCardComponent;
  let fixture: ComponentFixture<TrendingLocationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingLocationCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrendingLocationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
