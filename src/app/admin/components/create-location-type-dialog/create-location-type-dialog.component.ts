import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import * as AdminLocationTypesActions from '../../store/admin-location-types.actions';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-create-location-type-dialog',
  templateUrl: './create-location-type-dialog.component.html',
  styleUrls: ['./create-location-type-dialog.component.scss'],
})
export class CreateLocationTypeDialogComponent implements OnInit {
  selectedFile: File | null = null;

  constructor(
    private readonly dialogRef: MatDialogRef<CreateLocationTypeDialogComponent>,
    private readonly store: Store<AppState>
  ) {}

  ngOnInit(): void {}

  onCancelClicked(): void {
    this.dialogRef.close();
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
  }

  createLocationType(name: string) {
    if (name && this.selectedFile) {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('image', this.selectedFile);
      this.store.dispatch(
        AdminLocationTypesActions.createLocationType({ locationData: formData })
      );
    }
  }
}
