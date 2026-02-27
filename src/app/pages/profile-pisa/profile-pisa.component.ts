import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-profile-pisa',
  standalone: true,
  templateUrl: './profile-pisa.component.html',
  styleUrl: './profile-pisa.component.css'
})
export class ProfilePisaComponent {
  mainImage = '/images/Profile/image_2.png';

  gallery = [
    { url: '/images/Profile/image_3.jpg', alt: 'With Master Han' },
    { url: '/images/Profile/image_4.jpg', alt: 'Posing' },
    { url: '/images/Profile/image_5.jpg', alt: 'Teaching' },
    { url: '/images/Profile/image_6.jpg', alt: 'Orienting' },
    { url: '/images/Profile/image_7.jpg', alt: 'Doing warm-up' },
    { url: '/images/Profile/image_8.jpg', alt: 'With a child' },
    { url: '/images/Profile/image_9.jpg', alt: 'With friends' },
    { url: '/images/Profile/image_10.jpg', alt: 'Old photo' },
    { url: '/images/Profile/image_11.jpg', alt: 'Memory' },
    { url: '/images/Profile/image_12.jpg', alt: 'Event' },
    { url: '/images/Profile/image_13.jpg', alt: 'Championship' }
  ];

  selectedImage = signal(this.gallery[0]);

  setMainImage(img: any) {
    this.selectedImage.set(img);
  }

  nextImage() {
    const currentIndex = this.gallery.indexOf(this.selectedImage());
    const nextIndex = (currentIndex + 1) % this.gallery.length;
    this.selectedImage.set(this.gallery[nextIndex]);
  }

  prevImage() {
    const currentIndex = this.gallery.indexOf(this.selectedImage());
    const prevIndex = (currentIndex - 1 + this.gallery.length) % this.gallery.length;
    this.selectedImage.set(this.gallery[prevIndex]);
  }
}