import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppState } from 'src/app/app.state';
import { environment } from 'src/environments/environment';
import { CreateGradeDto } from '../../models/grade.create.dto';
import { TrendingLocationDto } from '../../models/trending-location.dto';
import { Store } from '@ngrx/store';
import { gradeLocation } from '../../store/locations.actions';
import { Observable } from 'rxjs';
import { User } from 'src/app/auth/models/user.interface';
import { selectUser } from 'src/app/auth/store/auth.selectors';

@Component({
  selector: 'app-trending-location-card',
  templateUrl: './trending-location-card.component.html',
  styleUrls: ['./trending-location-card.component.scss'],
})
export class TrendingLocationCardComponent implements OnInit {
  @Input() location: TrendingLocationDto | null = null;

  reviewOpen: boolean = false;

  comment: FormControl | null = null;

  rating: number = 0;

  user$: Observable<User | null> | null = null;

  get imageUrl() {
    return environment.mediaUrl + this.location?.imagePath;
  }

  constructor(
    private readonly router: Router,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {
    this.rating = this.location?.myGrade?.rating ?? 0;

    this.comment = new FormControl(this.location?.myGrade?.comment ?? '', [
      Validators.required,
    ]);

    this.user$ = this.store.select(selectUser);
  }

  openLocationDetails(): void {
    if (this.location) {
      this.router.navigateByUrl(`/location/${this.location.id}`);
    }
  }

  toggleReview(): void {
    this.reviewOpen = !this.reviewOpen;
  }

  onRatingChange(ev: any) {
    this.rating = ev.rating;
  }

  rateLocation() {
    if (!this.location?.id || !this.comment?.value) {
      return;
    }

    const grade: CreateGradeDto = {
      rating: this.rating,
      comment: this.comment.value,
      locationId: this.location.id,
    };

    this.reviewOpen = false;
    this.store.dispatch(gradeLocation({ grade }));
  }
}
