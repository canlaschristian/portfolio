import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { RouterModule } from '@angular/router';
import { SkillsListComponent } from './components/skills-list/skills-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    SkillsComponent,
    SkillsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: SkillsComponent }]),
    SharedModule,
    MatGridListModule
  ]
})
export class SkillsModule { }