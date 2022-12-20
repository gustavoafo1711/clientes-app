import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { Cliente } from '../cliente';
import { ClientesService } from '../../clientes.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent {
  cliente: Cliente;
  success: boolean = false;
  errors: String[];
  id: number;

  
  constructor( private service: ClientesService,
               private router: Router,
               private activatedRoute : ActivatedRoute ){
    this.cliente = new Cliente();
  }

  voltarParaListagem(){
    this.router.navigate(['/clientes-lista']);
  }
  
  ngOnInit(): void{

    let params : Observable<Params> = this.activatedRoute.params;
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id){
        this.service
          .getClienteById(this.id)
          .subscribe( response => this.cliente = response,
                      errorResponse => this.cliente = new Cliente()
          )
      }
    })
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
