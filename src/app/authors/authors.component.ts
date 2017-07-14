import { AuthorsService } from './../authors.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})

export class AuthorsComponent {

  authors: any[] = [];

  constructor(service: AuthorsService) { 
    this.authors = service.getAuthors();
  } 

  onClick($event) {
    console.log("Move", $event)
  }

}
