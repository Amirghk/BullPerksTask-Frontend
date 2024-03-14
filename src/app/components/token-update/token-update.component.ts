import { Component } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-token-update',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './token-update.component.html',
  styleUrl: './token-update.component.scss'
})
export class TokenUpdateComponent {
  tokenUpdated?: boolean;
  tokenUpdating: boolean = false;

  constructor(private tokenService: TokenService) {}

  updateToken() {
    this.tokenUpdating = true;
    this.tokenService.updateToken().subscribe(res => {
      this.tokenUpdated = true;
      this.tokenUpdating = false;
    })
  }
}
