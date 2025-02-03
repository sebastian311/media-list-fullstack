import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.scss'
})
export class AuthenticationComponent {
  private fb: FormBuilder = inject(FormBuilder);
  isLogin = true;

  authForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })

  toggleMode(): void {
    this.isLogin = !this.isLogin;

    if (!this.isLogin) {
      this.authForm.addControl('confirmPassword', this.fb.control('', Validators.required));
    } else {
      this.authForm.removeControl('confirmPassword');
    }
  }

  onSubmit(): void {
    if (this.authForm.valid) {
      console.log(this.isLogin ? 'Logging in...' : 'Registering...', this.authForm.value);
    }
  }
}
