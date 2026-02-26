import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { NewsComponent } from '../../components/news/news.component';
import { TrainingComponent } from '../../components/training/training.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, NewsComponent, TrainingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}