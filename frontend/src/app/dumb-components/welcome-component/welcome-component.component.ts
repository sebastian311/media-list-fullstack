import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome-component',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './welcome-component.component.html',
  styleUrl: './welcome-component.component.scss'
})
export class WelcomeComponent {

}
