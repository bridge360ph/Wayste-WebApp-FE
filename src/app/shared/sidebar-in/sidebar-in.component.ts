import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-in',
  templateUrl: './sidebar-in.component.html',
  styleUrls: ['./sidebar-in.component.scss']
})
export class SidebarInComponent implements OnInit {
  sidebarItems = [
    {
      name: 'Dashboard'
    },
    {
      name: 'Collectors Tracker'
    },
    {
      name: 'Eco Aides / Collectors'
    },
    {
      name: 'Waste Volume'
    },
    {
      name: 'Add-Ons'
    },
    {
      name: 'Organization'
    },
    {
      name: 'Subscription'
    },
    {
      name: 'Reports'
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
