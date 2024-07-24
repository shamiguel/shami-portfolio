import { Component } from '@angular/core';
import { Content, Section } from '../../customize/interfaces';
import { PortfolioService } from '../services/portfolio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences:Content[] = [];

  section:Section = {
    name: '',
    display: false,
    content: this.experiences
  };

  constructor(private portfolioService: PortfolioService){}

  ngOnInit():void{
    this.portfolioService.getExperiences().subscribe((data)=>{
      this.section = data;
      this.experiences = this.section.content;
    })
  }
}
