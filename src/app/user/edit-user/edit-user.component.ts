/**
 * Composant edit user
 * Auteur : walid Hattab
 * Developeur FrontEnd 
 */
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { UserService } from "../../services/user.service";
import { User } from "../model/user.model";

@Component({
  selector: "app-edit-user",
  templateUrl: "./edit-user.component.html",
  styleUrls: ["./edit-user.component.css"]
})
export class EditUserComponent implements OnInit {
  user = new User();
  logged: boolean;
  constructor(private router: Router, private $UserService: UserService) {}
  ngOnInit() {
    let userId = sessionStorage.getItem("editUserId");
    if (!userId) {
      this.router.navigate(["list-user"]);
      return;
    }
    this.user = {
      id: this.user.id,
      email: this.user.email,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      login:this.user.login,
      password:this.user.password,
    };

    this.$UserService.getUserById(+userId).subscribe(data => {
      console.log((this.user = data));
    });
    this.statusUser();
  }

  onSubmitUser(user:User): void {
    this.$UserService.UpdateUser(this.user).subscribe(
      data => {      
        console.log((this.user = data));
        this.router.navigate(["list-user"]);
      },
      error => {
        alert(error);
      }
    );
  }
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
