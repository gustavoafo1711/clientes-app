import { Component } from '@angular/core';

@Component({
  selector: 'app-servico-prestado-lista',
  templateUrl: './servico-prestado-lista.component.html',
  styleUrls: ['./servico-prestado-lista.component.css']
})
export class ServicoPrestadoListaComponent {

  nome: string;
  mes: number;
  meses: number[];

constructor(){
  this.meses = [1,2,3,4,5,6,7,8,9,10,11,12]
}

consultar(){
  console.log('Nome: ', this.nome, ', Mês: ',this.mes)
}


}
