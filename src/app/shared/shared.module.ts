import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { HomeHeaderComponent } from './home-header/home-header.component';
import { DashboardHeaderComponent } from './dashboard-header/dashboard-header.component';

@NgModule({
    imports: [
        CoreModule,
    ],
    declarations: [
        HomeHeaderComponent,
        DashboardHeaderComponent
    ],
    exports: [
        HomeHeaderComponent,
        DashboardHeaderComponent
    ]
})

export class SharedModule { }
