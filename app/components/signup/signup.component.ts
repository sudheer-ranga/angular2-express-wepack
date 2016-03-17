import {Component,View, OnInit} from "angular2/core";
import {FormBuilder, ControlGroup, Validators, Control} from "angular2/common";
import {Router} from "angular2/router";
import {AuthService} from "../../services/auth/auth.service";

@Component({
    templateUrl: 'components/signup/signup.tmpl.html'
})

export class SignupComponent implements OnInit {
    myForm:ControlGroup;
    error = false;
    errorMessage = '';

    constructor(private _fb:FormBuilder, private _authService: AuthService,private router: Router) {
    }

    onSignup() {
        this._authService.signupUser(this.myForm.value);
        this.router.parent.navigate(['/Home']);
    }

    ngOnInit():any {
        this.myForm = this._fb.group({
            email: ['', Validators.compose([
                Validators.required,
                this.isEmail
            ])],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.compose([
                Validators.required,
                this.isEqualPassword.bind(this)
            ])],
        });
    }

    isEmail(control:Control):{[s: string]: boolean} {
        if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            return {noEmail: true};
        }
    }

    isEqualPassword(control:Control):{[s: string]: boolean} {
        if (!this.myForm) {
            return {passwordsNotMatch: true};

        }
        if (control.value !== this.myForm.controls['password'].value) {
            return {passwordsNotMatch: true};
        }
    }
}