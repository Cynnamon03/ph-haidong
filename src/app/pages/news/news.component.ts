import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  standalone: true,
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {
  featuredArticle = {
    title: 'Forging New Blades: PNP Hosts First Haidong Gumdo Seminar with Master Han Sang-Hyun',
    content: [
      'On March 28–29, the Philippine National Police (PNP) hosted its first Haidong Gumdo seminar, led by Master Han Sang-Hyun of the World Haidong Gumdo Federation of Korea. During the event, General Victor B. Arevalo was formally appointed as Chairman of the Philippine Haidong Gumdo Association, while Colonel Reden Romansanta (PLTCOL) was designated as Director of Haidong Gumdo for the Philippine National Police, tasked with overseeing the training of all PNP officers in the discipline.',
      'We extend our sincere gratitude to Headmaster Ferdinand Francis Pisa of the Philippine Haidong Gumdo Association for his instrumental role in facilitating this meaningful event and fostering this significant partnership.',
      'Haidong!'
    ],
    image: '/images/News/image_2.jpg'
  };

  otherNews = [
    {
      title: 'Batch 2!',
      subtitle: 'Philippine Haidong Gumdo produces another batch of black belts.',
      image: '/images/News/image_3.jpg'
    },
    {
      title: 'Philippine Haidong Gumdo Seminar',
      subtitle: 'Introducing the Korean Art of Sword',
      image: '/images/News/image_4.jpg'
    }
  ];
}