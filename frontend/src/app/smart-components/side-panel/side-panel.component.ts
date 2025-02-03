import { Component, inject } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';

import { ThemeService } from '../../data-access/theme-service/theme.service';

@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.scss'
})
export class SidePanelComponent {
  private theme = inject(ThemeService);
  themeType: string = this.theme.getTheme() || "dark";

  toggleTheme(): void { 
    const isDark = this.theme.getTheme() === 'dark';
    this.theme.toggleTheme(!isDark);
    this.themeType = this.theme.getTheme() || "";
  }

  logout(): void {
    // TODO: To be implemented
  }
}
