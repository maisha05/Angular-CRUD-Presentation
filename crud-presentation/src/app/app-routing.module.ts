import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { StudentUpdateComponent } from './student-update/student-update.component';


const routes: Routes = [
  {path:"", redirectTo:"register",pathMatch:"full"},
  {path:"register", component:StudentAddComponent},
  {path:"search", component:StudentDeleteComponent},
  {path:"update/:studentId", component:StudentUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
