import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GithubService } from '../github-service/github.service';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {


  @Output() searchUser = new EventEmitter();

  Users = [];
  Username: string;

  constructor(private githubService: GithubService) { }

  userName() {
    this.githubService.getUser(this.Username);
    this.githubService.userRequest();
  }




  ngOnInit() {
    this.Users = this.githubService.users;
  }


}
