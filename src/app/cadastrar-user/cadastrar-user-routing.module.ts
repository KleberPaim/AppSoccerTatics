import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarUserPage } from './cadastrar-user.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarUserPageRoutingModule {}
