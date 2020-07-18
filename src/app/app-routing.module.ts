import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'signin',
                component: SigninComponent
            },
            {
                path: 'signup',
                component: SignupComponent
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./pages/dashboard/dashboard.module').then(mod => mod.DashboardModule)
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
