import { Component, Input } from '@angular/core';
interface links{
  name:string,
  url:string,
  active:boolean
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
 @Input() type:string='';
 @Input() list:links[]=[
  {name:'Profile', url:'user', active:true},
  {name:'Support', url:'support', active:false},
  {name:'logut', url:'', active:false},
 ];
}
