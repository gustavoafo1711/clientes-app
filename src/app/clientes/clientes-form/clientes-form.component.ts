import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Cliente } from '../cliente';
import { ClientesService } from '../../clientes.service';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent {
  cliente: Cliente;
  success: boolean = false;
  errors: String[];

  
  constructor( private service: ClientesService,
               private router: Router ){
    this.cliente = new Cliente();
  }

  voltarParaListagem(){
    this.router.navigate(['/clientes-lista']);
  }
  
  onSubmit(){
    this.service
      .salvar(this.cliente)
      .subscribe( reponse => {
        this.success = true;
        this.errors = [];
        this.cliente = reponse;
    }, errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
      
    }
    

    
    );
  }
}
