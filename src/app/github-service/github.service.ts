import { Observable } from 'rxjs/Observable';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tokenReference } from '@angular/compiler';





@Injectable({
  providedIn: 'root'
})
export class GithubService {




  getData(): Observable<any> {

    const url = 'https://api.github.com/users/daneden?access_token=';

    return this.http.get<any>(url + tokenReference);
  }
}

