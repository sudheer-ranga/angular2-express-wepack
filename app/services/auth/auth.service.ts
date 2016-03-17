import {Injectable, EventEmitter} from "angular2/core";
declare var Firebase: any;

@Injectable()
export class AuthService {
    private _userLoggedOut = new EventEmitter<any>();

    signupUser(user) {
        const firebaseRef = new Firebase('https://scorching-inferno-8044.firebaseio.com/');
        firebaseRef.createUser({
            email: user.email,
            password: user.password
        }, function(error, userData) {
            if (error) {
                console.error(error);
            } else {
                console.log('Successfully created user: ' + userData.uid);
            }
        });
    }

    signinUser(user                                                                                                 ) {
        const firebaseRef = new Firebase('https://scorching-inferno-8044.firebaseio.com/');
        firebaseRef.authWithPassword({
            email: user.email,
            password: user.password
        }, function(error, authData) {
            if (error) {
                console.error(error);
            } else {
                localStorage.setItem('token', authData.token);
                console.log(authData);
            }
        });
    }

    logout() {
        localStorage.removeItem('token');
        this._userLoggedOut.emit(null);
    }

    getLoggedOutEvent(): EventEmitter<any> {
        return this._userLoggedOut;
    }

    isAuthenticated(): boolean {
        return localStorage.getItem('token') !== null;
    }

}