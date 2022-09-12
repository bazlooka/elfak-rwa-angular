import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [PageNotFoundComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule],
  exports: [PageNotFoundComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
