import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-membership',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './membership.component.html',
  styleUrl: './membership.component.css'
})
export class MembershipComponent {
  applications = [
    {
      title: 'Membership',
      label: 'Application',
      link: '/pdf/Membership Application.pdf',
      icon: 'bi-person-fill'
    },
    {
      title: 'Instructor Licence',
      label: 'Application and renewal',
      link: '/pdf/Instructor Application.pdf',
      icon: 'bi-mortarboard'
    },
    {
      title: 'Dojang Accreditation',
      label: 'Application and renewal',
      link: '/pdf/Dojang Accreditation.pdf',
      icon: 'bi-shield-check'
    },
    {
      title: 'Jin Gum',
      label: 'Application For Purchasing Jin Gum',
      link: '/pdf/Jin-Gum Purchase.pdf',
      icon: 'bi-star-fill' 
    }
  ];
}