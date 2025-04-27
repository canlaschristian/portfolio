import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showSidebar = false;

  constructor(public themeService: ThemeService) {}

  toggleSidebar(): void {
    this.showSidebar = !this.showSidebar;
  }

  setTheme(theme: 'light' | 'dark'): void {
    console.log(theme)
    this.themeService.setDarkTheme(theme === 'dark');
  }
}