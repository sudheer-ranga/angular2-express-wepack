import {Component, View,  OnInit} from "angular2/core";
import {HeaderComponent} from "../header/header.component";

@Component({
    templateUrl: 'components/home/home.tmpl.html',
    directives: [HeaderComponent]
})

export class HomeComponent{}