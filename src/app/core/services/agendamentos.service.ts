import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgendamentosService {

  private url;
  constructor(private http: HttpClient) {
    this.url = 'https://localhost:44326/';
  }

  setAgendamentos(obj: any){ return this.http.post<any>(this.url + "api/Agendamento/cadastro", obj ) };

  getAgendamentos(idPacient: any){ return this.http.get<any>(this.url + "api/Agendamento/lista?idPacient="+idPacient) };

}
