import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/clientes.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent {

  cliente: Cliente;
  sucess: boolean = false;
  erros: String[];
  id: number;

  constructor(private service: ClientesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.cliente = new Cliente();
  }

  voltarParaListagem() {
    this.router.navigate(['/clientes/lista'])
  }

  ngOnInit(): void {

    let params: Observable<any> = this.activatedRoute.params;
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if (this.id) {
        this.service
          .getClienteById(this.id)
          .subscribe({
            next: response => this.cliente = response,
            error: errorResponse => this.cliente = new Cliente()
          })
      }
    })
  }

  onSubmit() {
    if (this.id) {
      this.service.atualizar(this.cliente)
        .subscribe({
          next: response => {
            this.sucess = true;
            this.erros = [];
          },
          error: errorResponse => {
            this.erros = ['Erro ao atualizar o cliente.']
          }
        })
    } else {
      this.service.salvar(this.cliente)
        .subscribe({
          next: response => {
            this.sucess = true;
            this.erros = [];
            this.cliente = response;
          },
          error: errorResponse => {
            this.sucess = false;
            this.erros = errorResponse.error.errors;
          }
        })
    }
  }

}
