import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/espace-client/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  successMessage = '';
  user: any = {}
  myForm: FormGroup;

  constructor( private userService: UserService,
    private _router: Router,
    private fb: FormBuilder) {
      this.myForm = this.fb.group({
      
        firstName :  new FormControl('', [Validators.required]),
        lastName :  new FormControl('', [Validators.required]),
        email :  new FormControl('', [Validators.required, Validators.email]),
        username :  new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      
      })
     }

  ngOnInit(): void {
  }
  registerUser(firstName: any, lastName: any, email: any, username: any, password: any) {
    this.userService.addUser(firstName.value, lastName.value, email.value, username.value, password.value).subscribe(
      (data) => {
      console.log(data)
      this.user = data
     
      localStorage.setItem("email", this.user.user.email)
      console.log(localStorage.getItem("email"))
      console.log( localStorage.setItem("username", this.user.user.username))
      localStorage.setItem("firstName", this.user.user.firstName)
      localStorage.setItem("lastName", this.user.user.lastName)
      localStorage.setItem("role", this.user.user.role)
      this._router.navigate(['./users']);
      
    },
    error => {
        console.log(error)
    });
  }


}
