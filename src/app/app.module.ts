import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { AppComponent } from './app.component';
import { SidebarDirective } from '../app/shared/directives/sidebar.directive';
import { LoginComponent } from '../app/core/login/login.component';
import { Authentication } from '../app/core/authentication/authentication';

import { HttpClientModule } from '@angular/common/http';

import { FormBuilder  } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { AgendamentosComponent } from '../app/modules/agendamentos/agendamentos.component';

import { AgendamentosModule } from '../app/modules/agendamentos/agendamentos.module';

@NgModule({
  imports:      [ CommonModule,BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule, RouterModule.forRoot([]), AppRoutingModule ],
  declarations: [ AppComponent, SidebarDirective, LoginComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ Authentication, FormBuilder]
})
export class AppModule { }
