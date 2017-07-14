import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  linkList: any[] = [
    { icon: '<i class="material-icons" aria-hidden="true">dashboard</i>', title: 'Dashboard', link: '/#', active: true },
    { icon: '<i class="material-icons" aria-hidden="true">people</i>', title: 'Fit a Model', link: '/buildModel', active: false }
  ];

  forAdmin: any[] = [
    { icon: '<i class="material-icons" aria-hidden="true">dashboard</i>', title: 'Departments', link: '/#', active: false },
    { icon: '<i class="material-icons" aria-hidden="true">people</i>', title: 'Employees', link: '/buildModel', active: false },
    { icon: '<i class="material-icons" aria-hidden="true">note_add</i>', title: 'Roles ', link: '/#', active: false }

  ];

  logo: string = 'New Angular App';


  constructor() { }

  ngOnInit() {
  }

  changeActive(title) {

    this.linkList = _.map(this.linkList, link => {

      if (link.title == title) {

        link.active = true;
      }
      else {
        link.active = false;
      }

      return link;

    });
  }

}
