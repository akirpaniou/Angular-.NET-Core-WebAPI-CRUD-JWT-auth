import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://localhost:5000/api";

  constructor(private http:HttpClient) { }

  getCourseList():Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/Course');
  }
  addCourse(val:any){
    return this.http.post(this.APIUrl+'/Course',val);
  }

  updateCourse(val:any){
    return this.http.put(this.APIUrl+'/Course',val);
  }

  deleteCourse(val:any){
    return this.http.delete(this.APIUrl+'/Course/'+val);
  }

}
