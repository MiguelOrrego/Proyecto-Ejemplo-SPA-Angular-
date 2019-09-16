import { Component } from '@angular/core';

import { People } from './models/people';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ejemplo-angular';
 


    personasArray:People[]=[
      {id:1,documento:1005253877,nombre:"Miguel Angel Orrego Lopez",profesion:"programador",edad:18},
      
];

seleccionarPersona:People=new People();

agregarOEditar(){
  if(this.seleccionarPersona.id==0){
    this.seleccionarPersona.id=this.personasArray.length + 1;
    this.personasArray.push(this.seleccionarPersona);
    console.log("paso por aca");
   
  }
 
  this.seleccionarPersona=new People();

}
abrirParaEditar(people:People){
this.seleccionarPersona=people;

}

eliminar(){
  if(confirm("estas Seguro de Eliminarlo?")){
  this.personasArray=this.personasArray.filter(x=> x!= this.seleccionarPersona);
  this.seleccionarPersona=new People();
  }
}
}
