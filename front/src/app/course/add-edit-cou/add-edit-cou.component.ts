import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-add-edit-cou',
  templateUrl: './add-edit-cou.component.html',
  styleUrls: ['./add-edit-cou.component.css']
})
export class AddEditCouComponent implements OnInit {



  constructor(private service:SharedService) { }

  @Input() cou:any;
  CourseID:string;
  CourseName:string;
  CourseDescription:string;

  ngOnInit(): void {
    this.CourseID=this.cou.CourseID;
    this.CourseName=this.cou.CourseName;
    this.CourseDescription=this.cou.CourseDescription;
  }

  addCourse(){
    var val = {CourseID:this.CourseID, CourseName:this.CourseName, CourseDescription:this.CourseDescription};
    this.service.addCourse(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCourse(){
    var val = {CourseID:this.CourseID, CourseName:this.CourseName, CourseDescription:this.CourseDescription};
    this.service.updateCourse(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
