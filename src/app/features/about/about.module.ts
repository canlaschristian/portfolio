import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { RouterModule } from '@angular/router';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AboutComponent,
    AboutMeComponent,
    ExperienceComponent,
    EducationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AboutComponent }]),
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatListModule
  ]
})
export class AboutModule { }