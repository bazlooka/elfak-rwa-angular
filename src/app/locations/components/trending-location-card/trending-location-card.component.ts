import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { TrendingLocation } from '../../models/trending-location.interface';

@Component({
  selector: 'app-trending-location-card',
  templateUrl: './trending-location-card.component.html',
  styleUrls: ['./trending-location-card.component.scss'],
})
export class TrendingLocationCardComponent implements OnInit {
  @Input() location: TrendingLocation | null = null;

  get imageUrl() {
    return environment.mediaUrl + this.location?.imagePath;
  }

  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  openLocationDetails(): void {
    if (this.location) {
      this.router.navigateByUrl(`/location/${this.location.id}`);
    }
  }
}
