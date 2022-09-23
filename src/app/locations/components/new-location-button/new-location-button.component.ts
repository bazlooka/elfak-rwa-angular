import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-location-button',
  templateUrl: './new-location-button.component.html',
  styleUrls: ['./new-location-button.component.scss'],
})
export class NewLocationButtonComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  openNewLocationPage() {
    this.router.navigateByUrl('/locations/new');
  }
}
