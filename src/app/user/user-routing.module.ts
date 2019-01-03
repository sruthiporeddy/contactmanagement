import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { UserGuard } from './services/user.guard';
import { DisplayUsersComponent } from './display-users/display-users.component';


const userRoutes: Routes = [
  { path: 'user', component: UserHomeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'contact/add', component : CreatecontactComponent, canActivate: [UserGuard]},
  { path: 'contact/display', component : DisplayUsersComponent, canActivate: [UserGuard]}
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
