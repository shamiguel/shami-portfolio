import { Injectable } from '@angular/core';
import { intro, projectSection, experienceSection, writingSection } from '../../customize/portfolio';
import { Observable, of } from 'rxjs';
import { Section } from '../../customize/interfaces';
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  getIntro(): Observable<any>{
    return of(intro)
  }

  getProjects(): Observable<Section>{
    return of(projectSection)
  }

  getWritings(): Observable<Section>{
    return of(writingSection)
  }  

  getExperiences(): Observable<Section>{
    return of(experienceSection)
  }    
}
