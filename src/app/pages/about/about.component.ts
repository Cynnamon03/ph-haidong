import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  leaders = [
    {
      name: 'Jeong-Ho Kim',
      role: 'President',
      title: 'Founder and World Haidong Gumdo® Federation President',
      image: '/images/Introduction/President Jeong-Ho Kim.jpg',
      bio: 'He combined the swordsmanship of these warriors and the flow and soul of Korean history to redefine a modern training system, and has tirelessly worked for the globalization of Haidong Gumdo®.'
    },
    {
      name: 'Sang-Hyun Han',
      role: 'President',
      title: 'Philippine and Europe Haidong Gumdo® Association Headmaster, 7th Dan',
      image: '/images/Introduction/President Sang-Hyun Han.png',
      bio: 'Headmaster Sang-Hyun Han was dispatched to the Philippines by the World Haidong Gumdo® Federation. He is the first Master to introduce and spread the art of Haidong Gumdo® in the Philippines. Ever since, he has been continuously teaching and working for the development and expansion of Haidong Gumdo®.'
    },
    {
      name: 'Francis Pisa',
      role: 'President',
      title: 'Philippine Haidong Gumdo® Headmaster',
      image: '/images/Introduction/President Francis Pisa.jpg',
      bio: 'A member of the World Haidong Gumdo Federation. In October 2018, the World Haidong Gumdo Federation appointed Master Ferdinand Francis Pisa to the position of President of the Philippine Haidong Gumdo Association, Incorporated. In 2016, he established Haidong Gumdo and slowly propagated the art through his network of students nationwide.'
    }
  ];
}