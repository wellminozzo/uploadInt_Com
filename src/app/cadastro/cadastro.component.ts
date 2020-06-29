import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

let outDB,
    inputPmae,
    inputPcpu,
    inputRam,
    inputFonte,
    InputHd,
    locationForm,  
    db;

const dbName = 'myMaquinaDB', 
      storeName = 'computadores';

const createDB = () => {
  if(window.indexedDB){
    const request = window.indexedDB.open('maquinasDB', 1); 
    
    request.onerror = (event) => {
      console.log('Error request', event);
      outDB.innerHTML = 'Error request';

    }
       
    
    request.onsuccess = (event) => {
      db = request.result;  
      console.log('Successed request', event, db);
      outDB.innerHTML = 'Error request';
    }

    request.onupgradeneeded = (event) => {
        outDB.innerHTML = 'upgraded request';
      
      
      //let db = event.target.result;

      let objectStoreMaquina = db.createObjectStoreMaquina(storeName,)
    }

    let objectStoreMaquina = db.createObjectStoreMaquina('storeName',
    {
      keypath: 'id',
      autoIncrement: true
    });

    objectStoreMaquina.createIndex('pmae','pmae', {unique: false});
    objectStoreMaquina.createIndex('pcpu','pcpu', {unique: false});
    objectStoreMaquina.createIndex('ram','ram', {unique: false});
    objectStoreMaquina.createIndex('fontee','fontee', {unique: false});
    objectStoreMaquina.createIndex('hd','hd', {unique: false});


    console.log('Upgraded request',);
  }
  

  else {
    console.log('no support !');
    outDB.innerHTML = 'Upgraded request';
  }

}   



const addData = (event) => {
  event.preventDefault();
  const transactionAdd = db.transaction([storeName], 'readwrite');
  const objectStoreMaquina = transactionAdd.objectStoreMaquina(storeName);
  
  const newLocation = {
    mae: inputPmae.value,
    cpu: inputPcpu.value,
    ram: inputRam.value,
    fonte: inputFonte.value,
    hd: InputHd.value
  
  }

  const request = objectStoreMaquina.add(newLocation);

  transactionAdd.oncomplete = (event) => {
    console.log('transaction completed', event);

}

transactionAdd.onerror = (event) => {
  console.log('transaction failed', event);
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  outDB = document.getElementById('output-db');
  inputPmae = document.getElementById('inputCity');
  inputPcpu = document.getElementById('inputLat');
  inputRam = document.getElementById('inputLog');
  inputFonte = document.getElementById('inputLog');
  InputHd = document.getElementById('inputLog');
  locationForm = document.getElementById('locationForm');

  locationForm.onsubmit = addData;

  createDB();
});
