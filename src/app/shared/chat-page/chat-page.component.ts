import { Component } from '@angular/core';
import { OpenAI } from 'openai';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Sharedservices } from '../shared.services'

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.scss']
})
export class ChatPageComponent {
  searchFrm:FormGroup;
  chatResponse:any;
  _openai =new OpenAI({
    apiKey:'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',
    dangerouslyAllowBrowser: true
  })
  constructor(private _fb:FormBuilder, private _api:Sharedservices){
    this.searchFrm= this._fb.group({
      search:['']
    })
    this.chatMe("Hi");
  }
  
  chatMe(query:string){
    console.log("Statrt :", query);
    this._api.chatFunction(query).subscribe(res=>{
      this.chatResponse = res;
    })
  }
}
