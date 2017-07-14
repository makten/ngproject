import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'casing',
  templateUrl: './casing.component.html',
  styleUrls: ['./casing.component.css'],
  inputs: ['testProp']
})

export class CasingComponent implements OnInit {
  @Input() testProp: boolean;
  movie: string = "hello";
  
  constructor() { }

  ngOnInit() {
  }

}
