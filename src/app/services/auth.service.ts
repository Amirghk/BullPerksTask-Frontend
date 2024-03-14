import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ApiUrls } from "../../assets/ApiUrls/ApiUrls";
import { LoginModel } from "./models/login.model";
import { Observable, ReplaySubject, firstValueFrom } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl: string = ApiUrls.BaseAddress;
  private userAuthenticated: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);

  constructor(private http: HttpClient) {

  }

  get getUserAuthenticated(): ReplaySubject<boolean> {
    return this.userAuthenticated;
  }

  isUserAuthenticated() {
    // would use Angular Auth OIDC client in a production setting
    let accessToken = localStorage.getItem('access_token')

    return !!accessToken;
  }

  async loginUser(inputModel: LoginModel): Promise<void> {
    const accessToken = await firstValueFrom(this.http.post(`${this.baseUrl}/auth/login`, inputModel, {responseType: 'text' }))
    if (accessToken) {
      localStorage.setItem('access_token', accessToken);
      this.userAuthenticated.next(true);
    } else {
      this.userAuthenticated.next(false);
    }
  }
}
