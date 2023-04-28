import { Component } from '@angular/core';
import { ServicoPrestadoBusca } from './servicoPrestadoBusca';
import { ServicoPrestadoService } from 'src/app/servico-prestado.service';

@Component({
  selector: 'app-servico-prestado-lista',
  templateUrl: './servico-prestado-lista.component.html',
  styleUrls: ['./servico-prestado-lista.component.css']
})
export class ServicoPrestadoListaComponent {

  nome: string;
  mes: number;
  meses: number[];
  lista: ServicoPrestadoBusca[];

  constructor(private service: ServicoPrestadoService) {
    this.meses = [1,2,3,4,5,6,7,8,9,10,11,12];
  }

  consultar() {
    this.service.buscar(this.nome, this.mes)
      .subscribe({next: response => this.lista = response})
  }

}
