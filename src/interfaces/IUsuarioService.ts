import { Observable } from "rxjs";
import { Usuario } from "src/models/Usuario";

// Cria metodos para o Usuario

export interface IUsuarioService {
    cadastro(usuario: Usuario): Observable<Usuario>; //Recebe cadastro do Usuario
    atualizar(usuario: Usuario): Observable<Usuario>; //Atualiza o Usuario
    logar(usuario: Usuario): void; // Loga o usuario
    retornarLogUsuario(): Usuario; //Retorna o login do usuario 
}