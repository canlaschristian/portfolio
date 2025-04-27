import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar'; 
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    SkillCardComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule
  ],
  exports: [
    LoadingSpinnerComponent,
    SkillCardComponent,
    ProjectCardComponent
  ]
})
export class SharedModule { }