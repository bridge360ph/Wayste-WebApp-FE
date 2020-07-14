import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dashboard-menu',
    templateUrl: './dashboard-menu.component.html',
    styleUrls: ['./dashboard-menu.component.scss']
})
export class DashboardMenuComponent implements OnInit {
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
