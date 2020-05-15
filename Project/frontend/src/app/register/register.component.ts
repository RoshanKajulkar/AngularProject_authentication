import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isRegistered = false;
  notRegistered = false;


  profileForm = this.fb.group({
    firstname: [''],
    lastname: [''],
    email: [''],
    password: ['']
  });

  constructor(private fb:FormBuilder,private service : AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.profileForm.value);
    
    this.service.register(this.profileForm.value).subscribe((response:{registered:string})=>{
      console.log(response);

      if(response.registered){
        this.isRegistered = true;
        this.notRegistered  = false
      }
      else{
        this.isRegistered = false;
        this.notRegistered  = true
      }
    })
    
    /*this.service.getinfo().subscribe((response)=>{
      console.log(response);
    })
    this.service.putinfo().subscribe((response)=>{
      console.log(response);
    })*/
  }

}
