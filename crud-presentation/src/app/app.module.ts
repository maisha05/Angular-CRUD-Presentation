import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { StudentService } from './student.service';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { StudentUpdateComponent } from './student-update/student-update.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentAddComponent,
    StudentDeleteComponent,
    StudentUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
