import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class AuthService {

  
    constructor(
        private router: Router,
        private http: HttpClient
    ) {}
    register(data : Object):Observable<Object>{
      return this.http.post("http://localhost:8000/api/register",data);
    }

     login(data : Object):Observable<Object>{
    return this.http.post("http://localhost:8000/api/login",data);
    }

    delete(data : Object):Observable<Object>{
        return this.http.post("http://localhost:8000/api/delete",data);
    }

    update(data : Object):Observable<Object>{
        return this.http.post("http://localhost:8000/api/update",data);
    }
}