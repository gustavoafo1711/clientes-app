import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Cliente } from './clientes/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor( private http: HttpClient ) { }

salvar(cliente : Cliente) : Observable<Cliente>{
  return this.http.post<Cliente>('http://localhost:8080/api/clientes', cliente);
}


getClientes() : Observable<Cliente[]>{
  return this.http.get<Cliente[]>('http://localhost:8080/api/clientes');
}


/*
//Testar sem acesar a API
getClientes(): Cliente[]{
  let cliente = new Cliente;
  cliente.id = 1;
  cliente.nome = 'Galadriel';
  cliente.cpf = '37926099082'
  cliente.dataCadastro = '17/11/2022'
  return [cliente]
}
*/


}
