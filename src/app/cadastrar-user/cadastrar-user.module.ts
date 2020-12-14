import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarUserPageRoutingModule } from './cadastrar-user-routing.module';

import { CadastrarUserPage } from './cadastrar-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarUserPageRoutingModule
  ],
  declarations: [CadastrarUserPage]
})
export class CadastrarUserPageModule {}
