import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUsuarioService } from "src/interfaces/IUsuarioService";
import { Usuario } from "src/models/Usuario";
import { HttpClient } from '@angular/common/http';
@Injectable({
    'providedIn':'root'
})

export class UsuarioService implements IUsuarioService {
    constructor(private _httpClient: HttpClient) {
        
    }
    cadastro(usuario: Usuario): Observable<Usuario> {
        if (!usuario.nome) throw new Error('O Campo Nome é Obrigatório.');
        if (!usuario.email) throw new Error('O Campo E-mail é Obrigatório.');
        if (!usuario.senha) throw new Error('O Campo Senha é Obrigatório.');
        if (usuario.senha  != usuario.confirmarSenha) throw new Error('Senha não é igual.')
        throw new Error("Method not implemented.");
    }
    atualizar(usuario: Usuario): Observable<Usuario> {
        throw new Error("Method not implemented.");
    }
    logar(usuario: Usuario): void {
        throw new Error("Method not implemented.");
    }
    retornarLogUsuario(): Usuario {
        throw new Error("Method not implemented.");
    }

}