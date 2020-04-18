
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  userUrl = 'https://api.github.com/search/users?q=';
  user: User;
  users: User[] = [];
  data: any;
  username: string;

  constructor(private http: HttpClient) {
    this.user = new User('', '', '');
   }

   getUser(username: string) {
     this.username = username;

   }



   userRequest() {
     this.users.length = 0;

     const promise = new Promise((resolve, reject) => {
       const userRequestUrl = this.userUrl + this.username;
       console.log(userRequestUrl);
       this.http.get(userRequestUrl).toPromise().then(response => {
         this.data = response;
         for (let i = 0; i < 1; i++) {
         this.user.username = this.data.items[i].login;
         this.user.image = this.data.items[i].avatar_url;
         this.user.url = this.data.items[i].html_url;
         this.users.push(
           new User(
             this.user.username,
             this.user.url,
             this.user.image
            ));
        }
         resolve();
       },
       error => {
         this.user.error = 'Please Enter a Valid Username';
         reject(error);
       });
     });
     return promise;
   }

}

