import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;
  profileType = false;

  constructor(
    private fb: FormBuilder,
    private readonly authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.email],
      phone_number: ['', Validators.required],
      password: ['', Validators.required],
      profile_type: false
    });
  }

  submitForm(): void {
    if (this.signUpForm.valid) {
      this.signUpForm.value.profile_type = this.profileType ? 'Artist' : 'Listener';
    }
  }
}
