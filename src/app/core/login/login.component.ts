import { Component, OnInit } from '@angular/core';
import { Authentication } from '../authentication/authentication';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user  : FormGroup;
  name  : string | null | undefined;

  msg      = 'Usuário e/ou senha inválidos. Verifique os dados e tente novamente.';
  logged   = true;
  

  constructor(
    public authentication : Authentication, 
    private formBuilder    : FormBuilder,
    private router: Router
    ) { 

      this.user = this.formBuilder.group({
        email    : ['', [Validators.required]],
        password : ['', [Validators.required]]
      });
  }

  ngOnInit() {
    this.name = localStorage.getItem('name'); 
    if(this.name != undefined){
      this.router.navigate(['/agendamentos']);
    }
  }

  logar(){

    // localStorage.setItem('email', this.user.value.login);
    // localStorage.setItem('id', '1');
    // localStorage.setItem('name', 'Maria');
    // this.router.navigate(['/agendamentos']);

    if(this.user.value.email != '' && this.user.value.password != '' ){
      this.authentication.logar(this.user?.value).subscribe(
        data=>{
          this.logged = data.logged;
          if(data.logged){
            localStorage.setItem('email', this.user.value.login);
            localStorage.setItem('id', data.id);
            localStorage.setItem('name', data.name);
            this.router.navigate(['/agendamentos']);
          }
        },
        err=>{
          this.logged = false;
        }
      );
    }else{
      this.msg = 'Por favor, preencha todas as informações.';
      this.logged = false;
    } 
  }
}
