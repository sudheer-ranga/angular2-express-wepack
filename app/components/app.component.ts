import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router} from "angular2/router";
import {SigninComponent} from "./signin/signin.component";
import {SignupComponent} from "./signup/signup.component";
import {HomeComponent} from "./home/home.component"
import {HeaderComponent} from "./header/header.component";
import {AuthService} from "./../services/auth/auth.service";
import {RouterOutlet} from "angular2/router";

import '../scss/style.scss';

@Component({
    selector: 'my-app',
    template: `
        <my-header></my-header>
        <div class="main">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [HeaderComponent, RouterOutlet]
})
@RouteConfig([
    {path: '/signup', name: 'Signup', component: SignupComponent},
    {path: '/signin', name: 'Signin', component: SigninComponent},
    {path: '/home', name: 'Home', component: HomeComponent,useAsDefault: true}
])
export class AppComponent implements OnInit {
    constructor(private _router: Router, private _authService: AuthService) {}

    ngOnInit():any {
        this._authService.getLoggedOutEvent().subscribe(() => this._router.navigate(['Signin']));
    }
}