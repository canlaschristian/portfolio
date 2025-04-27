import { Component, Input } from '@angular/core';
import { Skill } from '../../../core/models/data.model'; // Make sure this path is correct

@Component({
  selector: 'app-skill-card',
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.css']
})
export class SkillCardComponent {
  @Input() skill!: Skill; // This is the crucial missing part
}