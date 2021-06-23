import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean;

  formModel = {
    UserName: '',
    Password: ''
  }

  constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') != null)
    this.router.navigateByUrl('/prof');
  }

  onSubmit(form:NgForm){
    this.service.login(form.value).subscribe(
      (res:any)=>{
      localStorage.setItem('token', res.token);
      this.invalidLogin = false;
      this.router.navigateByUrl('/prof');
    },
      err =>{
        this.invalidLogin = true;
      }
    );
  }

}
