import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(users: any, searchUserByEemail: any): any {
    if (searchUserByEemail === undefined) return users;
    if(searchUserByEemail == null) return users;
    return users.filter(function(user){
      return user.email.toLowerCase().includes(searchUserByEemail.toLowerCase());
    })
  } 
}
