import { GithubService } from './../github-service/github.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  Users = [];


  constructor(private githubService:GithubService) { }


  ngOnInit() {
     this.Users = this.githubService.users;
     // console.log(this.userService.users)

  }

}
