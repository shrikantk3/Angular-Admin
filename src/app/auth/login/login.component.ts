import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { authServices } from '../auth.services';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginfm:FormGroup;
  constructor(
    private _fb:FormBuilder, 
    private _router:Router,
    private _http: HttpClient,
    private _authApi:authServices,
    private _toast:ToastrService
  ){
    this.loginfm = this._fb.group({
      email:['',[Validators.required]],
      password:['',[Validators.required]],
      remember:[false],
      isLogin:[true,[Validators.required]]
    })
  }

  get loginfn(){
    return this.loginfm.controls;
  }

  loginSubmit(event:any){
    console.log(this.loginfm.value);
    if(this.loginfm.valid){
      this._authApi.loginApi(this.loginfm.value).subscribe((res:any)=>{
        if(res?.status && res?.result){
          this._toast.success('Login Succesful!', 'Done');
          let data = res?.result[0];
          if(data.skills){
            this._router.navigate(['/user', data.username]);
          }else{
            this._router.navigate(['/steps', data.username]);
          }
        }else{
          this._toast.error('Please try again later!', 'Error');
        }
      })
    }else{
      this._toast.error('Please try again later!', 'Error');
    }
  }

}
