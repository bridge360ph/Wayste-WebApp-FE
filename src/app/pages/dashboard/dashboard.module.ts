import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardMenuComponent } from './components/dashboard-menu/dashboard-menu.component';


@NgModule({
    imports: [
        DashboardRoutingModule,
        CoreModule,
        SharedModule
    ],
    declarations: [
        DashboardComponent,
        DashboardMenuComponent
    ],
})

export class DashboardModule { }
