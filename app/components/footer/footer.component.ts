import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, Router} from "angular2/router";

@Component({
    selector: 'my-footer',
    templateUrl: 'components/footer/footer.tmpl.html',
    directives: [ROUTER_DIRECTIVES]
})
export class FooterComponent {
}