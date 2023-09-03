import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public router:Router){}
route(type:string){
if(type=='login'){
  this.router.navigate(['login'])
}
else{
  this.router.navigate(['signup'])

}
}
}
