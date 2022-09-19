import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [CommonModule, MatButtonModule],
})
export class ProfileModule {}
