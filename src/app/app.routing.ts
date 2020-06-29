 import { ModuleWithProviders } from '@angular/core';
 import { Routes, RouterModule } from '@angular/router';
 
 import { HomeComponent } from './home/home.component';
 import { CadastroComponent } from './cadastro/cadastro.component';
 import { MaquinasComponent } from './maquinas/maquinas.component';
 import { MaquinaDetalheComponent } from './maquina-detalhe/maquina-detalhe.component';
 import { MaquinaNaoEncontradaComponent } from './maquina-nao-encontrada/maquina-nao-encontrada.component';

 
 
 const APP_ROUTES: Routes = [
    { path: 'maquinas', component: MaquinasComponent},
    { path: 'maquina/:id', component: MaquinaDetalheComponent},
    { path: 'cadastro', component: CadastroComponent },
    { path: 'naoEncontrado', component: MaquinaNaoEncontradaComponent},
    { path: '', component: HomeComponent }

 ];

 export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES); 