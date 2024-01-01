import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-steps',
  templateUrl: './signup-steps.component.html',
  styleUrls: ['./signup-steps.component.scss']
})
export class SignupStepsComponent {
  signupfm:FormGroup;
  occupationList:any[]=['Software', 'Professor','Architect']
  constructor(
    private _fb:FormBuilder,
    private _router:Router
  ){
    this.signupfm = this._fb.group({
      type:['asker'],
      subject:[],
      topics:[],
      occupation:[''],
      role:['']
    })
  }
  onSubmit(){
    console.log(this.signupfm.value)
    this._router.navigate(['user']);
  }

}
