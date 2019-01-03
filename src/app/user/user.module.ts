import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserHomeComponent } from './user-home/user-home.component';
import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './register/register.component';
import { FooterComponent, HeaderComponent } from '../shared';
import { LoginComponent } from './login/login.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { DisplayUsersComponent } from './display-users/display-users.component';


@NgModule({
  declarations: [
      UserHomeComponent,
      RegisterComponent,
      FooterComponent,
      HeaderComponent,
      LoginComponent,
      CreatecontactComponent,
      DisplayUsersComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule

  ]
})
export class UserModule { }
