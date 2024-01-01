import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { authServices } from '../auth.services';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupfm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private _router:Router,
    private _toast:ToastrService,
    private _http:HttpClient,
    private _authApi:authServices
  ){
    this.signupfm= this.fb.group({
      email:['', [Validators.required, Validators.email]],
      phone:['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      username:['',[Validators.required, Validators.minLength(2)]],
      fname:['',[Validators.required, Validators.minLength(2)]],
      mname:['',[Validators.required, Validators.minLength(2)]],
      lname:['',[Validators.required, Validators.minLength(2)]],
      password:['', [Validators.required, Validators.minLength(3)]],
      cpassword:['', Validators.required],
      
    })
  }
  validateUser(){
    console.log(this.signupfm.controls['username'].value);
  }
  onSubmit(){
    if(this.signupfm.valid){
      this._authApi.signupApi(this.signupfm.value).subscribe(res=>{
        this._toast.success("Signup Successful done.","Success!");
        this._router.navigate(['steps', this.signupfm.controls['username'].value]);
      })
      
    }else{
      this._toast.error("Error","Signup Error please try again!");
    }
  }
}
