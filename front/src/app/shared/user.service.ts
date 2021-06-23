import { Injectable } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb:FormBuilder, private http:HttpClient) { }
  readonly BaseURI = 'http://localhost:5000/api';

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    FullName: [''],
    Email: ['', Validators.email],
    Password:['', [Validators.required, Validators.minLength(5)]]
  });

  register(){
    var body = {
      UserName: this.formModel.value.UserName,
      FullName: this.formModel.value.FullName,
      Email: this.formModel.value.Email,
      Password: this.formModel.value.Password
    };
    return this.http.post(this.BaseURI + '/AppUser/Register', body);
  }

  login(formData){
    return this.http.post(this.BaseURI + '/AppUser/Login', formData);
  }

  getUserProf(){
    var tokenHeader = new HttpHeaders({'Authorization':'Bearer ' + localStorage.getItem('token')})
    return this.http.get(this.BaseURI + '/UserProf', {headers: tokenHeader});
  }
}
