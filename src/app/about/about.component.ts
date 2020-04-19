import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  dates: Date[] = [ new Date(new Date(2007, 9, 19))];

  constructor() { }

  ngOnInit(): void {
  }

}
