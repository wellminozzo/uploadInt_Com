import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MaquinasComponent } from './maquinas/maquinas.component';
import { routing } from './app.routing';
import { MaquinaDetalheComponent } from './maquina-detalhe/maquina-detalhe.component';
import { MaquinasService } from './maquinas/maquinas.service';
import { MaquinaNaoEncontradaComponent } from './maquina-nao-encontrada/maquina-nao-encontrada.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastroComponent,
    MaquinasComponent,
    MaquinaDetalheComponent,
    MaquinaNaoEncontradaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    
  ],
  providers: [MaquinasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
