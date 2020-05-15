import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class HomeGuard implements CanActivate {

    loginStatus : string;    

    constructor(
        private router: Router,
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        //not logged in hence redirecting to login page
        this.loginStatus = localStorage.getItem("isLoggedIn");
        if(this.loginStatus === "true"){
            this.router.navigate(['/profile']);
            return false;
        }
        console.log("guarding");
        return true;
    }
}