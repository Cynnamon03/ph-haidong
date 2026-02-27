import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {
  eventList = [
    {
      image: '/images/Events/image_3.jpg',
      title: 'Haidong Gumdo National Championship and Mulimpia 2024',
      date: '26 October 2024',
      location: 'Brisbane, Australia',
    },
    {
      image: '/images/Events/image_4.jpg',
      title: 'Haidong Gumdo Seminar with Master Sang Hyun, Han',
      date: '24 November 2024',
      location: 'Varese, Italy',
    },
    {
      image: '/images/Events/image_5.jpg',
      title: 'England, UK',
      date: '2025',
      location: 'England, United Kingdom',
    }
  ];

  selectedEvent = signal<any>(null);

  openModal(item: any) {
    this.selectedEvent.set(item);
  }

  closeModal() {
    this.selectedEvent.set(null);
  }

  nextEvent() {
    const idx = this.eventList.indexOf(this.selectedEvent());
    const nextIdx = (idx + 1) % this.eventList.length;
    this.selectedEvent.set(this.eventList[nextIdx]);
  }
  
  prevEvent() {
    const idx = this.eventList.indexOf(this.selectedEvent());
    const prevIdx = (idx - 1 + this.eventList.length) % this.eventList.length;
    this.selectedEvent.set(this.eventList[prevIdx]);
  }
}