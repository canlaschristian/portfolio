import { Component } from '@angular/core';
import { Skill } from '../../core/models/data.model';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[] = [];

  constructor(private dataService: DataService) {
    this.skills = this.dataService.getSkills();
  }
}