/**
 * Composant login
 * Auteur : walid Hattab
 * Developeur FrontEnd 
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";

import { UserService } from "../../services/user.service";
import { User } from "../model/user.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User();
  users: User[];
  @ViewChild('userForm') form: any;
  constructor(private router: Router, private $UserService: UserService) {
  }
  ngOnInit() {
  }
  LogIn(): void {
    let login$ = this.user.login;
    let password$ = this.user.password;
    console.log(login$, password$);
    this.$UserService.getUsers().subscribe(
      data => {
        let data$ = this.users = data;
        for ( let val of data$ ) {
          if (login$ === val.login && password$ === val.password) {
            console.log('true')
            sessionStorage.setItem('currentlogin', login$);
            sessionStorage.setItem('currentpwd', password$);
            this.router.navigate(['list-user']) ;  
          }
        }
      },
      error => {
        alert(error);
      }
    );
  }
}
