import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { SwCouComponent } from './course/sw-cou/sw-cou.component';
import { AddEditCouComponent } from './course/add-edit-cou/add-edit-cou.component';
import { SharedService } from './shared.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { ProfComponent } from './prof/prof.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { UploadComponent } from './upload/upload.component';
import { TasksComponent } from './tasks/tasks.component';

export function tokenGetter(){
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SwCouComponent,
    AddEditCouComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    ProfComponent,
    UploadComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService, UserService,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
