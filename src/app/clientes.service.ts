import { Injectable } from '@angular/core';
import { Cliente } from './clientes/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getCliente() : Cliente{
    let cliente = new Cliente();
    cliente.nome = 'Melisandre';
    cliente.cpf = '78952347848';
    return cliente;
  }
}
