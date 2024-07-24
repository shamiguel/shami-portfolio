import { Component } from '@angular/core';
import { Content, Section } from '../../customize/interfaces';
import { PortfolioService } from '../services/portfolio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects:Content[] = [];

  section:Section = {
    name: '',
    display: false,
    content: this.projects
  };

  constructor(private portfolioService: PortfolioService){}

  ngOnInit():void{
    this.portfolioService.getProjects().subscribe((data)=>{
      this.section = data;
      this.projects = this.section.content;
    })
  }
}
