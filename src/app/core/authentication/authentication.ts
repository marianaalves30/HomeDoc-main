import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Authentication {
  private url;
  constructor(private http: HttpClient) {
    this.url = 'https://localhost:44326/';
  }

  logar(obj: any){ return this.http.post<any>(this.url + "Login/login", obj ) };

  // getAgendamentos(obj: { IDF001: string; }):Observable<any>{return this.http.get(this.url + 'tp/mdfe/downloadPdfMdfe/' + obj.IDF001, {responseType: 'blob'});}

  // setAgendamentos(obj: { IDF001: string; }):Observable<any>{return this.http.get(this.url + 'tp/mdfe/downloadPdfMdfe/' + obj.IDF001, {responseType: 'blob'});}

  
}
