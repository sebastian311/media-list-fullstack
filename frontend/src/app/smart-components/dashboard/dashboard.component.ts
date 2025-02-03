import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidePanelComponent } from "../side-panel/side-panel.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterModule,
    SidePanelComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
