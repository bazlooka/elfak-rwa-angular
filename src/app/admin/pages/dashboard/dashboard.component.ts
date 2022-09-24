import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  openUsers() {
    this.router.navigateByUrl('/dashboard/users');
  }

  openLocations() {
    this.router.navigateByUrl('/dashboard/locations');
  }

  openLocationTypes() {
    this.router.navigateByUrl('/dashboard/location-types');
  }

  openSettings() {
    this.router.navigateByUrl('/dashboard/settings');
  }
}
