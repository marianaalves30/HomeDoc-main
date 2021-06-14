import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendamentosComponent } from './agendamentos.component';
import { FormBuilder  } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../../app.module';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, AppModule],
  declarations: [AgendamentosComponent],
  providers:    [FormBuilder],
})
export class AgendamentosModule { }
