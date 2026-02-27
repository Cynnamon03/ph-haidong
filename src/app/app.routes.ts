import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { OrganizationComponent } from './pages/organization/organization.component';
import { ProfilePisaComponent } from './pages/profile-pisa/profile-pisa.component';
import { NewsComponent } from './pages/news/news.component';
import { EventsComponent } from './pages/events/events.component';
import { MembershipComponent } from './pages/membership/membership.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'organization', component: OrganizationComponent },
  { path: 'profile-pisa', component: ProfilePisaComponent },
  { path: 'news', component: NewsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'gallery', component: GalleryComponent },
];