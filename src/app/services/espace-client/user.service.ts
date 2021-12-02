import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  addUser(firstName: any, lastName: any, email: any, username: any, password: any) {
    return this.http.post(environment.apiRegisterUser,
      {
        
        "firstName": firstName,
        "lastName": lastName,
        "email": email,
        "username": username,
        "password": password,
      });
  }
  
  getUsers() {
    let url = `${environment.apiListUsers}`;
    return new Promise((slv) => {
      this.http.post(url, { headers: this.headers })
        .subscribe((data: any) => {
          console.log("getProducts : ")
          console.log(data)
          if (data && data.success && data.result) {
            slv(data.result)
          } else slv(false)
        },
          (error) => {
            slv(false)
          });
    })
  }

}
