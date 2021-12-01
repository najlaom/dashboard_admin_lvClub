import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListUsersComponent } from './pages/espace-client/list-users/list-users.component';
import { RegisterComponent } from './pages/register/register.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
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
    ]
   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
