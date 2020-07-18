import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    declarations: [
        HomeComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [
        CoreModule,
        SharedModule
    ]
})

export class PagesModule { }
