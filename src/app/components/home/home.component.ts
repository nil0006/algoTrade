import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public router:Router){}
  routeToAbout(){
    this.router.navigate([''],{fragment: 'about'})
  }
  routeTocourse(courseType:string){
    let params={
      type:courseType
    }
    this.router.navigate(['course-details'],courseType?{queryParams:params}:{})
  }
}
