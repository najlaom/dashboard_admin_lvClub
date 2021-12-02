import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/espace-client/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  listUsers: any = []

  constructor(private userService: UserService) { }

  async ngOnInit(){
    await this.getUsers();
  }

  getUsers() {
    
    this.userService.getUsers().then(
      (data: any) => {
        this.listUsers = data;
        console.log("datacccccccccc")
        console.log(data)
        
      }
    )
  }

}
