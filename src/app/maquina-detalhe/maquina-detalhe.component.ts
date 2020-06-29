import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs';
import { MaquinasService } from '../maquinas/maquinas.service';

@Component({
  selector: 'app-maquina-detalhe',
  templateUrl: './maquina-detalhe.component.html',
  styleUrls: ['./maquina-detalhe.component.css']
})
export class MaquinaDetalheComponent implements OnInit {

  id: number; 
  inscricao: Subscription; 
  maquina: any;
  maquinasService: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private maquinaService: MaquinasService
    
    
  ) { 
    //this.id = this.route.snapshot.params['id'];
  }

  ngOnInit()  {
    this.inscricao = this.route.params.subscribe(
     (params: any) => {
       this.id = params['id'];

       this.maquina = this.maquinasService.getMaquinas(this.id)

      if (this.maquina == null){
          this.router.navigate(['/naoEncontrado']);
      }

      }
     );
   
     }

  ngOnDestroy(){
    this.inscricao.unsubscribe();

  }
  
   }
