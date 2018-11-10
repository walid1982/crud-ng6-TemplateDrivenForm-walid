/**
 * Composant add user
 * Auteur : walid Hattab
 * Developeur FrontEnd 
 */
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";

import { UserService } from "../../services/user.service";
import { User } from "../model/user.model";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user = new User();
  logged: boolean;
  @ViewChild('userForm') form: any;
  constructor(
    private router: Router,
    private $UserService: UserService) { }

  ngOnInit() {
    this.statusUser();
  }
  onSubmitUser(user: User): void {
    if (this.form.valid) {
    this.user.id,
      this.user.email,
      this.user.firstName,
      this.user.lastName,
      this.user.login,
      this.user.password,
      this.$UserService.createUser(this.user)
        .subscribe(data => {
          console.log(this.user = data)
          this.router.navigate(['list-user'])
        },
          error => {
            alert(error);
          })
  }}
  statusUser(){  
    let $currentlogin = sessionStorage.getItem('currentlogin');
    let $currentpwd = sessionStorage.getItem('currentpwd');
    if($currentlogin && $currentpwd){
      console.log('je suis connecté', this.logged = true);
    }
    else{
      this.router.navigate(["login"]);
      console.log('je suis deconnecté');
     
    }
  }
  LogOut(): void {
    sessionStorage.clear();
    this.router.navigate(["login"]);
  }
}
