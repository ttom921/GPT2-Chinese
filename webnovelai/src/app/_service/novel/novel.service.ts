import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NovelService {
  api = `${environment.apiUrl}/genparaph`;
  constructor(private http: HttpClient) { }
  Post(data: any) {
    return this.http.post<any>(this.api, data);
  }
  Get() {
    const api = `${environment.apiUrl}`;
    return this.http.get<any>(api);
  }
}
