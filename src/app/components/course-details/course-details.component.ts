import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit{
  constructor(private activeroute:ActivatedRoute){

  }
ngOnInit(): void {
    this.activeroute.queryParams.subscribe((params)=>{
      console.log(params);
      
    })
}
}
