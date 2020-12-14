import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Login } from 'src/models/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public login: Login = new Login();
  constructor(private _menu: MenuController,private _route: Router) { }

  ngOnInit() {
    console.log('Pagina construida.');
    this._menu.swipeGesture(false); // block no menu
  }

  fazerlog(){
    console.log(this.login);
  }

  fazerCadastro(){
    this._route.navigate(['/cadastrar-user']);
  }
}
