import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Location } from '../../models/location.interface';

@Component({
  selector: 'app-trending-location-card',
  templateUrl: './trending-location-card.component.html',
  styleUrls: ['./trending-location-card.component.scss'],
})
export class TrendingLocationCardComponent implements OnInit {
  @Input() location: Location | null = null;

  constructor() {}

  ngOnInit(): void {}

  get imageUrl() {
    if (!this.location || this.location.imagePaths.length === 0) {
      return null;
    }
    return environment.mediaUrl + this.location.imagePaths[0];
  }
}
