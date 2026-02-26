import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  newsList = [
    {
      image: '/images/Events/image_3.jpg',
      alt: 'National Championship',
      date: '26 October 2024, Brisbane, Australia',
      title: 'Haidong Gumdo National Championship and Mulimpia 2024',
    },
    {
      image: '/images/Events/image_4.jpg',
      alt: 'Master Han Seminar',
      date: '24 November 2024, Varese, Italy',
      title: 'Haidong Gumdo Seminar with Master Sang Hyun, Han',
    },
    {
      image: '/images/Events/image_5.jpg',
      alt: '2025 Updates',
      date: '2025',
      title: 'England, UK',
    }
  ];

  selectedNews = signal<any>(null);

  openModal(item: any) {
    this.selectedNews.set(item);
  }

  closeModal() {
    this.selectedNews.set(null);
  }

  nextNews() {
    const currentItem = this.selectedNews();
    const currentIndex = this.newsList.indexOf(currentItem);
    if (currentIndex === this.newsList.length - 1) {
      this.selectedNews.set(this.newsList[0]);
    } else {
      this.selectedNews.set(this.newsList[currentIndex + 1]);
    }
  }

  prevNews() {
    const currentItem = this.selectedNews();
    const currentIndex = this.newsList.indexOf(currentItem);
    if (currentIndex === 0) {
      this.selectedNews.set(this.newsList[this.newsList.length - 1]);
    } else {
      this.selectedNews.set(this.newsList[currentIndex - 1]);
    }
  }
}