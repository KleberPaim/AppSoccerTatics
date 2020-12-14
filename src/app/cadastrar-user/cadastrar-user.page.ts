import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/models/Usuario';
import { UsuarioService } from 'src/services/UsuarioService';

@Component({
  selector: 'app-cadastrar-user',
  templateUrl: './cadastrar-user.page.html',
  styleUrls: ['./cadastrar-user.page.scss'],
})
export class CadastrarUserPage implements OnInit {

  public usuario: Usuario = new Usuario();
  constructor(private _usuarioService: UsuarioService) { 
    console.log(this.usuario);
  } 

  ngOnInit() {
  }

  criarUser (){
    console.log(this.usuario);
    this._usuarioService.cadastro(this.usuario);
  }
}
