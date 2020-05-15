import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    loginStatus : string;    

    constructor(
        private router: Router,
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //not logged in hence redirecting to login page
        this.loginStatus = localStorage.getItem("isLoggedIn");
        if(this.loginStatus === "true"){
            return true;
        }

        this.router.navigate(['/login']);
        return false;
    }
}