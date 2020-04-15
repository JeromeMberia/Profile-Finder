
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  apiURL = 'https://api.github.com/users/';
  user: User;



  constructor(private http: HttpClient) {
    this.user = new User('');
  }
  userRequest(input) {
    const username = input;
    interface ApiResponse {
    login: any;
  }

    const promise = new Promise((resolve, reject) => {
    this.http.get<ApiResponse>(this.apiURL + username + '?access_token=' + environment.tokenReference).toPromise().then(response => {
      this.user.login = response.login;
      console.log(response.login);
      resolve();
    },
    error => {
      this.user.login = 'JeromeMberia';
      reject(error);
    });
  });
    return promise;
  }
}
