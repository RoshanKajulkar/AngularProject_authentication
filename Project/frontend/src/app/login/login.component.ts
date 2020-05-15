import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  profileForm = this.fb.group({
    email: [''],
    password: ['']
  });

  notUser = false;

  constructor(private fb: FormBuilder,private service : AuthService, private router: Router) { }

  
  ngOnInit(): void {
  }

  onSubmit(){
    console.log("logging..");

    console.log(this.profileForm.value);
    
    this.service.login(this.profileForm.value).subscribe((
      response:{
        user:string,
        firstname:string,
        lastname:string,
        email:string      
      } | {user:string})=>{
      console.log(response);

      if(response.user === "legal"){
        console.log("user legal");
        localStorage.setItem("isLoggedIn","true");
        localStorage.setItem("user",JSON.stringify(response));
        this.router.navigate(['../profile']);
      }
      else{
       console.log("user illegal");
       this.notUser = true;
      }
    })
  }
}
