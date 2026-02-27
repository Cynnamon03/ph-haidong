import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { NewsCardComponent } from '../../components/news-card/news-card.component';
import { TrainingComponent } from '../../components/training/training.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, NewsCardComponent, TrainingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}