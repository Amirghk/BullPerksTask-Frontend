import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginModel } from '../../services/models/login.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {}


  ngOnInit() {
    this.authService.getUserAuthenticated.subscribe(res => {
      this.isAuthenticated = res
    })

    this.isAuthenticated = this.authService.isUserAuthenticated()
  }

  async onSubmit() {

    if (this.loginForm.valid) {
      let user: LoginModel = {
        userName: this.loginForm.controls.userName.value!,
        password: this.loginForm.controls.password.value!
      }
      await this.authService.loginUser(user)
    }
  }
}
