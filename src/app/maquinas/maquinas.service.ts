import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaquinasService {


  getMaquinas(id: number){
    let maquinas = this.getMaquinas();
    for (let i=0; i<maquinas.length; i++){
    let maquina = maquinas[i];
    if (maquina.id == id){
      return maquina;

    }  
    }
      return null;
}

  constructor() { }
}


