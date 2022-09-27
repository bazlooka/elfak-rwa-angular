import { Component, OnInit } from '@angular/core';
import { Location } from '../../models/location.interface';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { selectOpenedLocation } from '../../store/locations.selectors';
import { gradeLocation, loadLocation } from '../../store/locations.actions';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormControl, Validators } from '@angular/forms';
import { CreateGradeDto } from '../../models/grade.create.dto';
import { selectUser } from 'src/app/auth/store/auth.selectors';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  location$: Observable<Location | null> | null = null;

  locationId: number | null = null;
  userId: number | null = null;

  comment: FormControl | null = null;

  rating: number = 0;

  constructor(
    private readonly store: Store<AppState>,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.location$ = this.store.select(selectOpenedLocation);

    this.route.params.subscribe((params) => {
      this.store.dispatch(loadLocation({ locationId: params['locationId'] }));
    });

    this.store.select(selectUser).subscribe((user) => {
      if (user) {
        this.userId = user?.id;
      }
    });

    this.location$.subscribe((loc) => {
      const myRating = loc?.grades.find(
        (grade) => grade?.gradedBy?.id === this.userId
      );

      this.comment = new FormControl(myRating?.comment ?? '', [
        Validators.required,
      ]);
      this.rating = myRating?.rating ?? 0;
      this.locationId = loc?.id ?? null;
    });
  }

  getImageUrl(path: string) {
    return environment.mediaUrl + path;
  }

  onRatingChange(ev: any) {
    this.rating = ev.rating;
  }

  rateLocation() {
    if (!this.locationId || !this.comment?.value) {
      return;
    }

    const grade: CreateGradeDto = {
      rating: this.rating,
      comment: this.comment.value,
      locationId: this.locationId,
    };

    this.store.dispatch(gradeLocation({ grade }));
  }
}
