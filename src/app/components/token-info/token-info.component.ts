import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { tokenModel } from '../../services/models/token.model';
import { CommonModule } from '@angular/common';
import { WeiToTokenPipe } from '../../shared/Pipes/WeiToTokenPipe';

@Component({
  selector: 'app-token-info',
  standalone: true,
  imports: [CommonModule, WeiToTokenPipe],
  templateUrl: './token-info.component.html',
  styleUrl: './token-info.component.scss'
})
export class TokenInfoComponent implements OnInit {

  token?: tokenModel;

  constructor(private tokenService: TokenService) {}

  ngOnInit(): void {
    this.tokenService.getTokenInfo().subscribe(res => {
      if (res) {
        this.token = res
      }
    })
  }
}
