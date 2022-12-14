import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { User } from '../user';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.css']
})
export class StudentDeleteComponent implements OnInit {
  users:any;
  name:string;

  update:any;


  constructor(private service:StudentService) { }

  public findByName(){
    let resp= this.service.getStudentByName(this.name);
    resp.subscribe((data)=>this.users=data);
   }

  public deleteUser(id:any){
    let resp= this.service.deleteUser(id);
    resp.subscribe((data)=>this.users=data);
   }

  ngOnInit() {
    let resp=this.service.getStudents();
    resp.subscribe((data)=>this.users=data);
  }


}
