import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginfm:FormGroup;
  constructor(private _fb:FormBuilder){
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

}
