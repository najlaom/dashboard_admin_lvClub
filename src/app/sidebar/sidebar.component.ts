import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../services/admin/admin.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  email: any = '';
  username: any = '';
  firsname: any = '';
  lastname: any = '';
  idUser: any = '';
  token: any = '';
  role: any ='';
  constructor(private adminService: AdminService,
    private _router: Router) { }

  ngOnInit(): void {
    console.log(localStorage.getItem('email'));
    this.email = localStorage.getItem('email');
    this.username = localStorage.getItem('username');
    console.log(localStorage.getItem('username'));
    this.firsname = localStorage.getItem('firstName');
    console.log(localStorage.getItem('firstName'));
    this.lastname = localStorage.getItem('lastName');
    console.log(localStorage.getItem('lastName'));
    this.idUser = localStorage.getItem('_id');
    console.log(localStorage.getItem('_id'));
    this.role = localStorage.getItem('role');
    console.log(localStorage.getItem('role'));
  }
  // logouggt(){
  //   this.token = localStorage.removeItem('token');
  //   this.adminService.logout(this.token).subscribe(
  //     () => {
  //       console.log(this.token)
  //     }
  //   )
  // }
  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

}
