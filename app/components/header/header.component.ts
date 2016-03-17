import {Component, View} from "angular2/core";
import {ROUTER_DIRECTIVES, Router} from "angular2/router";
import {AuthService} from "../../services/auth/auth.service";

@Component({
    selector: 'my-header',
    templateUrl: 'components/header/header.tmpl.html',
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent {
    constructor(private _authService: AuthService) {}

    isAuth() {
        return this._authService.isAuthenticated();
    }

    logout() {
        this._authService.logout();
    }
}