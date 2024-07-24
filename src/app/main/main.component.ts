import { Component } from '@angular/core';
import { PortfolioService } from '../services/portfolio.service';
import { Section, Content } from '../../customize/interfaces';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  
  portfolioTitle: string = "";
  blurb: string = "";
  constructor(private portfolioService: PortfolioService){}

  ngOnInit(): void {
    this.portfolioService.getIntro().subscribe((data)=>{
      this.portfolioTitle = data.portfolioName;
      this.blurb = data.blurb
    })
  }

}
