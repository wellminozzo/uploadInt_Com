import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaquinasService } from './maquinas.service';

@Component({
  selector: 'app-maquinas',
  templateUrl: './maquinas.component.html',
  styleUrls: ['./maquinas.component.css']
})
export class MaquinasComponent implements OnInit {

  maquinas: any[];

  constructor(private maquinasSerice: MaquinasService) { 
   
  }


ngOnInit()  {
  this.maquinas = this.maquinasSerice.getMaquinas();
   }
  

}


