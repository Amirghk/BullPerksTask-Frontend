import { Injectable } from "@angular/core";
import { ApiUrls } from "../../assets/ApiUrls/ApiUrls";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tokenModel } from "./models/token.model";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private baseUrl: string = ApiUrls.BaseAddress;

  constructor(private http: HttpClient){}

  getTokenInfo(): Observable<tokenModel> {
    return this.http.get<tokenModel>(`${this.baseUrl}/token/getData`)
  }

  updateToken(): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/token/update`, {})
  }

}
