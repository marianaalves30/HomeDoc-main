import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgendamentosService } from '../../core/services/agendamentos.service';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.scss']
})
export class AgendamentosComponent implements OnInit {
  
  agendamento : FormGroup;
  name  : string | null | undefined;
  idUser : string | null | undefined;

  salvando   = false;
  adress     = false;
  descAdress = '';
  carregando = false;

  displaySuccess      = 'none';
  displayErro         = 'none';
  msgErro             = '';
  msgListaAgendamento = 'Nenhuma agendamento realizado.';
  

  listaAgendamentos: any;
  // listaAgendamentos = [
  //   {
  //     idPacient: 3,
  //     namePatient: "teste oficial",
  //     idDoctor: 3,
  //     nameDoctor: 'Dra. Brenda Oliveira',
  //     adress: 'Rua João Naves de Ávila, nº 1000, Uberlândia MG',
  //     startDate: '2021-06-30T18:07:23.75',
  //     dayOfWeek: 'Sex',
  //     confirmed: false
  //   },
  //   {
  //     idPacient: 3,
  //     namePatient: "teste oficial",
  //     idDoctor: 3,
  //     nameDoctor: 'Dra. Marcela Oliveira',
  //     adress: 'Rua João Naves de Ávila, nº 1000, Uberlândia MG',
  //     startDate: '2021-06-12T18:07:23.75',
  //     dayOfWeek: 'Qua',
  //     confirmed: true
  //   },
  //   {
  //     idPacient: 3,
  //     namePatient: "teste oficial",
  //     idDoctor: 3,
  //     nameDoctor: 'Dra. Marcela Oliveira',
  //     adress: 'Rua João Naves de Ávila, nº 1000, Uberlândia MG',
  //     startDate: '2021-06-12T18:07:23.75',
  //     dayOfWeek: 'Qua',
  //     confirmed: true
  //   },
  // ]

  constructor( 
    private router: Router,
    private formBuilder : FormBuilder,
    public agendamentosService: AgendamentosService) { 
      this.agendamento = this.formBuilder.group({
        idDoctor    : 0,
        idPacient   : null,
        startDate   : null
      });
    }


  ngOnInit() {
    this.salvando = false;
    this.name     = localStorage.getItem('name'); 
    this.idUser   = localStorage.getItem('id'); 
    if(this.name == undefined){
      this.router.navigate(['/login']);
    }
    this.msgListaAgendamento = '';
    this.getAgendamentos();

  }

  getMes(mes: any){
    let retorno = '';
    switch (mes) {
      case '01':
        retorno = 'Jan';
      break;
      case '02':
        retorno = 'Fev';
      break;
      case '03':
        retorno = 'Mar';
      break;
      case '04':
        retorno = 'Abr';
      break;
      case '05':
        retorno = 'Mai';
      break;
      case '06':
        retorno = 'Jun';
      break;
      case '07':
        retorno = 'Jul';
      break;
      case '08':
        retorno = 'Ago';
      break;
      case '09':
        retorno = 'Set';
      break;
      case '10':
        retorno = 'Out';
      break;
      case '11':
        retorno = 'Nov';
      break;
      case '12':
        retorno = 'Dez';
      break;
      default:
        break;
    }

    return retorno;
  }

  salvarAgendamento(){
    this.salvando = true;

    if(this.agendamento.value != undefined && this.agendamento.value.idDoctor != 0 && this.agendamento.value.startDate != null){
     
      this.agendamento.value.idPacient = Number(this.idUser);
      this.agendamento.value.idDoctor = Number(this.agendamento.value.idDoctor);
      debugger
      this.agendamentosService.setAgendamentos(this.agendamento.value).subscribe(
        data=>{
          
          if(data.id){
            this.displaySuccess = 'listview';
            this.salvando       = false;
            this.getAgendamentos();
            this.agendamento.reset();
            this.agendamento.controls['idDoctor'].setValue(0);
          }
        },
        err=>{
          this.displayErro = 'listview';
          this.msgErro     = 'Erro ao salvar o agendamento.';
          this.salvando    = false;
        }
      );
    }else{
      this.displayErro = 'listview';
      this.msgErro     = 'Preencha todos os campos, por favor.';
      this.salvando    = false;
    }

  }

  getAgendamentos(){
    this.carregando = true;
    this.agendamentosService.getAgendamentos(this.idUser).subscribe(
      data=>{
        if(data != undefined){
          this.listaAgendamentos   = data;
          this.msgListaAgendamento = '';
          this.carregando          = false;
        }
      },
      err=>{
        this.carregando = false;
        this.msgListaAgendamento = 'Nenhuma agendamento encontrado.';
      }
    );
  }
  
  closeToast(tipo: number){
    switch(tipo){
      case 1:
        this.displaySuccess = 'none';
      break;
      case 2:
        this.displayErro = 'none';
      break;
    }
    
  }

  showEndereco() {
    // changes.prop contains the old and the new value...
    switch(this.agendamento.value.idDoctor){
      case '1':
        this.adress = true;
        this.descAdress = 'Endereço: Rua João Naves de Ávila, nº 1000, Uberlândia MG';
      break;
      case '2':
        this.adress = true;
        this.descAdress = 'Endereço: Rua Cachoeira Dourada, nº 31, Uberlândia MG';
      break;
      case '3':
        this.adress = true;
        this.descAdress = 'Endereço: Rua Itaipu, nº 102, Uberlândia MG';
      break;
      default:
        this.adress = false;
        this.descAdress = '';
      break;

      

    }
  }

  logaut(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
