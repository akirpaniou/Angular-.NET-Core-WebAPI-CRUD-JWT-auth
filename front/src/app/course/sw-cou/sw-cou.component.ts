import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-sw-cou',
  templateUrl: './sw-cou.component.html',
  styleUrls: ['./sw-cou.component.css']
})
export class SwCouComponent implements OnInit {


  constructor(private service:SharedService) { }

  CourseList:any=[];
  ModalTitle:string;
  ActiveAddEditCouComp:boolean=false;
  cou:any;

  CourseIDFilter:string="";
  CourseNameFilter:string="";
  CourseListWithoutFilter:any=[];


  ngOnInit(): void {
    this.refreshCouList();
  }

  addClick(){
    this.cou={
      CourseID:0,
      CourseName:"",
      CourseDescription:"",
    }
    this.ModalTitle="Add Course";
    this.ActiveAddEditCouComp=true;
  }

  closeClick(){
    this.ActiveAddEditCouComp=false;
    this.refreshCouList();
  }

  editClick(item){
    this.cou=item;
    this.ModalTitle="Edit Course";
    this.ActiveAddEditCouComp=true;
  }

  deleteClick(item){
    if(confirm('Are you sure?')){
      this.service.deleteCourse(item.CourseID).subscribe(data=>{
        alert(data.toString());
        this.refreshCouList();
      })
    }
  }

  refreshCouList(){
    this.service.getCourseList().subscribe(data=>{
      this.CourseList=data;
      this.CourseListWithoutFilter=data;
    });
  }

  Filter(){
    var CourseIDFilter = this.CourseIDFilter;
    var CourseNameFilter = this.CourseNameFilter;

    this.CourseList = this.CourseListWithoutFilter.filter(function (el){
        return el.CourseID.toString().toLowerCase().includes(
          CourseIDFilter.toString().trim().toLowerCase()
        )&&
        el.CourseName.toString().toLowerCase().includes(
          CourseNameFilter.toString().trim().toLowerCase()
        )
    });
  }
}
