import {Component,  OnInit} from "angular2/core";
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
    templateUrl: 'components/home/home.tmpl.html',
    directives: [HeaderComponent, FooterComponent]
})

export class HomeComponent{}