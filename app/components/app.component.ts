import {Component, OnInit} from 'angular2/core';
import {RouteConfig, Router} from "angular2/router";
import {RouterOutlet} from "angular2/router";

import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {HomeComponent} from "./home/home.component"

import '../scss/style.scss';

@Component({
    selector: 'my-app',
    template: `
        <my-header></my-header>
        <div class="main">
            <router-outlet></router-outlet>
        </div>
         <my-footer></my-footer>
    `,
    directives: [HeaderComponent, RouterOutlet, FooterComponent]
})
@RouteConfig([
    {path: '/home', name: 'Home', component: HomeComponent, useAsDefault: true}
])
export class AppComponent {
}