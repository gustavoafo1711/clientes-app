import { Component } from '@angular/core';

import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent {
  cliente: Cliente;
  nome: string = "Viúva Negra";

  constructor(){
    this.cliente = new Cliente();
    this.cliente.nome = "Arya Stark";
  }
  
  clicar(){
    console.log('Cliquei!!!')
  }
}
