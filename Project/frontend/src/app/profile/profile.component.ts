import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  showProfile = false;

  user = JSON.parse(localStorage.getItem("user"));
  

  profileForm = this.fb.group({
    firstname: [''],
    lastname: [''],
    email: [''],
  });

  constructor(private router:Router,
    private service : AuthService,
    private fb:FormBuilder) { console.log(this.user); }

  ngOnInit(): void {
    
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['../login']);
  }

  delete(){

    var user = JSON.parse(localStorage.getItem("user"));
    var data = {"email":user.email};
   
    console.log(data);
    this.service.delete(data).subscribe((response)=>{
      console.log(response);
      localStorage.clear();
      this.router.navigate(['../login']);
    });
    
  }

  onSubmit(){
    this.showProfile = false;
    let user = this.profileForm.value;
    let currentState =  JSON.parse(JSON.stringify(user));
   
    user.user = "legal";
    console.log(currentState);
    console.log(user);
    localStorage.setItem("user",JSON.stringify(user));

    this.user = currentState;


    this.service.update(currentState).subscribe((response)=>{
      console.log(response);
    });
  }

  
  update(){
    this.showProfile = true;

    let user = JSON.parse(localStorage.getItem("user"));

    this.profileForm = this.fb.group({
      firstname: [user.firstname],
      lastname: [user.lastname],
      email: [user.email],
    });
  }
}
