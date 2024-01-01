import { Component } from '@angular/core';
import { OpenAI } from 'openai';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Sharedservices } from '../shared.services';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent {
  searchFrm:FormGroup;
  chatResponse:any;
  isloading:boolean= false;
  _openai =new OpenAI({
    apiKey:environment.SECRET_KEY,
    dangerouslyAllowBrowser: true
  })
  constructor(private _fb:FormBuilder, private _api:Sharedservices){
    console.log(environment.SECRET_KEY);
    this.searchFrm= this._fb.group({
      search:['']
    })
    this.chatMe("Hi");
  }
  
  chatMe(query:string){
    this.isloading =true;
    console.log("Statrt :", query);
    this._api.chatFunction(query).subscribe(res=>{
      this.chatResponse = res;
      this.isloading =false;
    })
  }
}
