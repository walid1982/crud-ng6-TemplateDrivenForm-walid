/**
 * Composant liste user
 * Auteur : walid Hattab
 * Developeur FrontEnd 
 */
import { Component, OnInit } from "@angular/core";

import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";
import { User } from "../model/user.model";

@Component({
  selector: "app-list-user",
  templateUrl: "./list-user.component.html",
  styleUrls: ["./list-user.component.css"]
})
export class ListUserComponent implements OnInit {
  users: User[];
  logged: boolean;
  searchUserByEemail:any;
 
  p: number = 1;
  constructor(private router: Router, private $UserService: UserService) {}

  ngOnInit() {   
    this.getAllUsers();
    this.statusUser();
  }
  getAllUsers() {
    this.$UserService.getUsers().subscribe(
      data => {
        console.log((this.users = data))
        this.users = data;
      },
      error => {
        alert(error);
      }
    );
  }
  removeUser(user: User) {
    if(window.confirm('Are sure you want to delete this item ?')){
    this.$UserService.deleteUser(user.id).subscribe(
      data => {
        this.users = this.users.filter(u => u !== user);
        this.$UserService.getUsers();
      },
      error => {
        alert(error);
      }
    );
  } }

  editUser(user: User): void {
    sessionStorage.removeItem("editUserId");
    sessionStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(["edit-user"]);
  }
  addUser(): void {
    this.router.navigate(["add-user"]);
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
