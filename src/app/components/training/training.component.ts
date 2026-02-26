import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-training',
  standalone: true,
  templateUrl: './training.component.html',
  styleUrl: './training.component.css'
})
export class TrainingComponent {
  trainingList = [
    {
      image: '/images/Home/image_6.jpg',
      alt: 'Basic Movements',
      title: 'Basic Movements',
      description: 'Basic stance training harmonizes the mind and body and creates dynamic energy. If you add inner energy to the outward movement of the body, you will be able to develop and change yourself. You must create a flow that fits your body.'
    },
    {
      image: '/images/Home/image_7.jpg',
      alt: 'Sword Forms',
      title: 'Sword Forms',
      description: 'As you become one with the sword, the practitioner benefits from increased strength, focus, coordination, balance, flexibility, breath control, timing, and speed of movement which leads to mastery.'
    },
    {
      image: '/images/Home/image_8.jpg',
      alt: 'Bamboo Cutting',
      title: 'Paper & Bamboo Cutting',
      description: 'The underlying theories of the sword techniques are mastered through cutting practice. A harmony of speed, power, fast sighting and correct footwork is required.'
    },
    {
      image: '/images/Home/image_9.jpg',
      alt: 'Candle Snuffing',
      title: 'Candle Snuffing',
      description: 'This type of training is used to increase and measure the practitioner\'s focus, power, speed, control and accuracy with the sword.'
    },
    {
      image: '/images/Home/image_10.jpg',
      alt: 'Sword Dance',
      title: 'Sword Dance',
      description: 'Haidong Gumdo Sword Dance embraces the culture and history of Korea. It also enables the practitioner the freedom to express and explore their creative side in a fun way to music.'
    },
    {
      image: '/images/Home/image_11.jpg',
      alt: 'Sparring',
      title: 'Sparring',
      description: 'Sparring will develop fast reflexes, confidence, and judgement where the practitioner will apply the sword techniques learned from Sword Forms.'
    },
    {
      image: '/images/Home/image_12.jpg',
      alt: 'Meditation',
      title: 'Breathing & Meditation',
      description: 'Meditation and breathing exercises enhance the development of internal energy and help in calming both the mind and body.'
    }
  ];

  currentIndex = signal(0);

  nextSlide() {
    this.currentIndex.update(i => (i === this.trainingList.length - 1 ? 0 : i + 1));
  }

  prevSlide() {
    this.currentIndex.update(i => (i === 0 ? this.trainingList.length - 1 : i - 1));
  }
}