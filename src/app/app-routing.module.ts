import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AddUserComponent } from './pages/espace-client/add-user/add-user.component';
import { ListUsersComponent } from './pages/espace-client/list-users/list-users.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: '', component: SidebarComponent, children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'users', component: ListUsersComponent
      },
      {
        path: 'add-user', component: AddUserComponent
      },
      
    ]
   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
