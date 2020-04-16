import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../github-service/github.service';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

    // tslint:disable-next-line:variable-name
    constructor(private githubService: GithubService) {

    }

user: String[];

getUsers(){

  this.githubService.getData().subscribe((data) =>{
    console.log(data)
  })

}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
