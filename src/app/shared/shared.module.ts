import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';
import { SidebarInComponent } from './sidebar-in/sidebar-in.component';

@NgModule({
    imports: [
        CoreModule,
    ],
    declarations: [
        HomeHeaderComponent,
        DashboardHeaderComponent,
        SidebarInComponent
    ],
    exports: [
        HomeHeaderComponent,
        DashboardHeaderComponent,
        SidebarInComponent
    ]
})

export class SharedModule { }
