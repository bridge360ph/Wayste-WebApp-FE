import { Injectable } from '@angular/core';
import { ServiceBase } from '../base/base.service';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService extends ServiceBase {

    // OnTokenChange = new Subject<IUser>();
  
    /**
     * Stores the token to cookie id_token
     */
    StoreToken(token: string): void {
        this.cookieService.put('id_token', token);

        // this.OnTokenChange.next(this.GetLoggedInUser());
        // this.StoreUserAccountType(token);
    }

    RemoveToken(key = 'id_token') {
        this.cookieService.remove(key);
    }

    GetToken() {
        return this.cookieService.get('id_token');
    }

    GetUserAccountType() {
        const { account_type } = this.GetLoggedInUser();
        return account_type;
    }

    GetLoggedInUser() {
        const user = this.jwtHelperService.decodeToken(this.GetToken());
        return user;
    }

    GetLoggedInUserID() {
        const token = this.jwtHelperService.decodeToken(this.GetToken());
        if (token) {
            return token._id;
        } else {
            return null;
        }
    }

    GetUserFullName() {
        const token = this.jwtHelperService.decodeToken(this.GetToken());
        if (token) {
            return token.first_name + ' ' + token.last_name;
        } else {
            return null;
        }
    }

    GetUserFirstName() {
        const token = this.jwtHelperService.decodeToken(this.GetToken());
        if (token) {
            return token.first_name;
        } else {
            return null;
        }
    }

    IsLoggedIn() {
        const token = this.GetToken();
        let isValid = false;

        try {
            isValid = !this.jwtHelperService.isTokenExpired(token);
        } catch (error) {
            isValid = false;
        }

        return isValid;
    }

    ValidToken(): boolean {
        const token = this.GetToken();
        let isValid = false;

        try {
            isValid = !this.jwtHelperService.isTokenExpired(token);
        } catch (error) {
            isValid = false;
            this.Logout();
        }

        return isValid;
    }

    Logout() {
        this.cookieService.remove('id_token');
        this.cookieService.remove('id_account_type');
        this.router.navigate(['/']);
    }
}
