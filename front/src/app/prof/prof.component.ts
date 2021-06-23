import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';


@Component({
  selector: 'app-prof',
  templateUrl: './prof.component.html',
  styleUrls: ['./prof.component.css']
})
export class ProfComponent implements OnInit {

  userDetails;

  constructor(private route: Router, private service: UserService) { }

  ngOnInit(): void {
    this.service.getUserProf().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }

  logOut(){
    localStorage.removeItem('token');
    this.route.navigate(['/login']);
  }
}
