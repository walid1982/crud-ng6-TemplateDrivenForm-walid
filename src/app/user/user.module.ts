/**
 * module user
 * Auteur : walid Hattab
 * Developeur FrontEnd 
 */
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import {NgxPaginationModule} from 'ngx-pagination'; 

import { AddUserComponent } from "./add-user/add-user.component";
import { ListUserComponent } from "./list-user/list-user.component";
import { EditUserComponent } from "./edit-user/edit-user.component";
import { LoginComponent } from "../user/login/login.component";
import { routing } from "../app.rooting";
import { SearchUserPipe } from './list-user/search-user.pipe';

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    CommonModule,
    NgxPaginationModule,
    routing],
  declarations: [
    AddUserComponent,
    EditUserComponent,
    LoginComponent,
    ListUserComponent,
    SearchUserPipe
  ],
  providers: []
})
export class UserModule { }
