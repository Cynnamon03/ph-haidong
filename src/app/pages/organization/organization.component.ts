import { Component } from '@angular/core';

@Component({
  selector: 'app-organization',
  standalone: true,
  templateUrl: './organization.component.html',
  styleUrl: './organization.component.css'
})
export class OrganizationComponent {
  founder = {
    name: 'Jeong-Ho Kim',
    role: 'President',
    title: 'Founder and World Haidong Gumdo® Federation President',
    image: '/images/Introduction/President Jeong-Ho Kim.jpg'
  };

  headmaster = {
    name: 'Sang Hyun Han',
    role: 'Association Headmaster',
    image: '/images/Introduction/President Sang-Hyun Han.png'
  };

  philippineLeadership = [
    {
      name: 'Ferdinand Pisa',
      role: 'Philippine Headmaster',
      image: '/images/Organization/Philippine Headmaster.png'
    },
    {
      name: 'Danny Langcay',
      role: 'Secretary General',
      image: '/images/Organization/Secretary General.png'
    }
  ];
}