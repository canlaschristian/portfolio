import { Component } from '@angular/core';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  fullTextOptions = ['Full-Stack Web Developer', '.NET Developer', 'Angular Developer', 'WordPress Developer', 'Mobile Developer'];
  displayText = '';
  currentOptionIndex = 0;
  typingSpeed = 60; // milliseconds
  deletingSpeed = 50;
  delayBetween = 2000;
  constructor(public themeService: ThemeService) {}

  ngOnInit() {
    this.typeLoop();
  }

  async typeLoop() {
    while (true) {
      const fullText = this.fullTextOptions[this.currentOptionIndex];

      for (let i = 0; i <= fullText.length; i++) {
        this.displayText = fullText.substring(0, i);
        await this.delay(this.typingSpeed);
      }

      await this.delay(this.delayBetween);

      for (let i = fullText.length; i >= 0; i--) {
        this.displayText = fullText.substring(0, i);
        await this.delay(this.deletingSpeed);
      }

      this.currentOptionIndex = (this.currentOptionIndex + 1) % this.fullTextOptions.length;
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}