import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { CourseComponent } from './course/course.component';
import { ProfComponent } from './prof/prof.component';
import { TasksComponent } from './tasks/tasks.component';
import { UploadComponent } from './upload/upload.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'course', component: CourseComponent},
  {path:'user', component: UserComponent},
  {path:'registration', component: RegistrationComponent},
  {path:'login', component: LoginComponent},
  {path:'prof', component: ProfComponent, canActivate:[AuthGuard]},
  {path:'upload', component: UploadComponent},
  {path:'tasks', component: TasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
