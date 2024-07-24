import { Component } from '@angular/core';
import { Content, Section } from '../../customize/interfaces';
import { PortfolioService } from '../services/portfolio.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-writing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './writing.component.html',
  styleUrl: './writing.component.scss'
})
export class WritingComponent {
  writings:Content[] = [];

  section:Section = {
    name: '',
    display: false,
    content: this.writings
  };

  constructor(private portfolioService: PortfolioService){}

  ngOnInit():void{
    this.portfolioService.getWritings().subscribe((data)=>{
      this.section = data;
      this.writings = this.section.content;
    })
  }
}
