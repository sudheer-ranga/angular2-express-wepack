'use strict';

import 'zone.js';
import 'reflect-metadata';
import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './components/app.component';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";
import {AuthService} from "./services/auth/auth.service";

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, ROUTER_DIRECTIVES, AuthService]);