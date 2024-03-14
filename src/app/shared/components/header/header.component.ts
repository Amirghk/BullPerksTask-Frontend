import { Component, OnInit } from '@angular/core';
import { navigationLink } from './models/navigationLink.model';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  headerItems: navigationLink[] = [
    { name: 'Login', shouldBeAuthenticated: false, routerLink: '/login' },
    { name: 'Info', shouldBeAuthenticated: false, routerLink: '/token-info' },
    { name: 'Update', shouldBeAuthenticated: true, routerLink: '/token-update' },
  ];

  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUserAuthenticated.subscribe(res => {
      this.isAuthenticated = res
    })

    this.isAuthenticated = this.authService.isUserAuthenticated()
  }
}
