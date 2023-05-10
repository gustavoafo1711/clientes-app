import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Usuario } from './usuario';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;
  cadastrando: boolean;
  mensagemSucesso: string;
  errors: String[];

  constructor( private router: Router,
               private authService: AuthService ) { }

  onSubmit() {
    this.router.navigate(['/home']);
  }

  preparaCadastrar(event: { preventDefault: () => void; }) {
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro() {
    this.cadastrando = false;
  }

  cadastrar() {
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService
        .salvar(usuario)
        .subscribe({
          next: response => {this.mensagemSucesso = 'Cadastro realizado com sucesso! Efetue o login.',
                             this.cadastrando = false,
                             this.username = null,
                             this.password = null,
                             this.errors = []
        },
          error: errorResponse => {this.errors = errorResponse.error.errors,
                                   this.mensagemSucesso = null}
        })
  }

}
