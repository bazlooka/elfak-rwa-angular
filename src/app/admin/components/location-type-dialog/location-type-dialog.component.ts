import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { AdminLocationType } from '../../models/admin-location-type.dto';

@Component({
  selector: 'app-location-type-dialog',
  templateUrl: './location-type-dialog.component.html',
  styleUrls: ['./location-type-dialog.component.scss'],
})
export class LocationTypeDialogComponent implements OnInit {
  selectedFile: File | null = null;

  title = 'New location type';
  mode: 'edit' | 'create' = 'create';

  constructor(
    private readonly dialogRef: MatDialogRef<LocationTypeDialogComponent>,
    private readonly store: Store<AppState>,
    @Inject(MAT_DIALOG_DATA)
    public readonly data: { locationType: AdminLocationType } | null
  ) {}

  ngOnInit(): void {
    if (this.data) {
      this.mode = 'edit';
      this.title = `Edit ${this.data.locationType.name}`;
    }
  }

  onCancelClicked(): void {
    this.dialogRef.close();
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
  }

  onOkClicked(name: string) {
    if (!name) {
      return;
    }

    if (this.mode === 'create' && !this.selectedFile) {
      return;
    }

    const formData = new FormData();
    formData.append('name', name);
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.dialogRef.close({ formData, id: this.data?.locationType.id });
  }
}
