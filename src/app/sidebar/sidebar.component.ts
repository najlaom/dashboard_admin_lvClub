import { Component, OnInit } from '@angular/core';

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
  role: any ='';
  constructor() { }

  ngOnInit(): void {
    console.log(localStorage.getItem('email'));
    this.email = localStorage.getItem('email');
    this.username = localStorage.getItem('username');
    console.log(localStorage.getItem('username'));
    this.firsname = localStorage.getItem('firstName');
    console.log(localStorage.getItem('firstName'));
    this.lastname = localStorage.getItem('lastName');
    console.log(localStorage.getItem('lastName'));
    this.idUser = localStorage.getItem('id');
    console.log(localStorage.getItem('id'));
    this.role = localStorage.getItem('role');
    console.log(localStorage.getItem('role'));
  }

}
