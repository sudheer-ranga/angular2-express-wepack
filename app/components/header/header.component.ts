import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, Router} from "angular2/router";

@Component({
    selector: 'my-header',
    templateUrl: 'components/header/header.tmpl.html',
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent {
}