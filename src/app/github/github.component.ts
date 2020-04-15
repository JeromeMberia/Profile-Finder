import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../github-service/github.service';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  @Input()
  user: User;
  username = '';

  constructor(private githubService: GithubService, private http: HttpClient) {

  }

  getUser() {
    this.githubService.userRequest(this.username);
  }

  ngOnInit(): void {
  }

}
