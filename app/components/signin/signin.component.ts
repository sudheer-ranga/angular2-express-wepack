import {Component, View, OnInit} from "angular2/core";
import {FormBuilder, ControlGroup, Validators} from "angular2/common";
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "angular2/router";

@Component({
    templateUrl: 'components/signin/signin.tmpl.html'
})

export class SigninComponent implements OnInit {
    myForm: ControlGroup;
    error = false;
    errorMessage = '';

    constructor(private _fb: FormBuilder, private _authService: AuthService,private router: Router) {}

    onSignin() {
        this._authService.signinUser(this.myForm.value);
        this.router.parent.navigate(['/Home']);
    }

    ngOnInit():any {
        this.myForm = this._fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
}