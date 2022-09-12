import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './pages/events/events.component';
import { EventComponent } from './pages/event/event.component';
import { NewEventComponent } from './pages/new-event/new-event.component';

@NgModule({
  declarations: [
    EventsComponent,
    EventComponent,
    NewEventComponent
  ],
  imports: [CommonModule],
})
export class EventsModule {}
