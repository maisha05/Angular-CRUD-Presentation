import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  edit = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  }

  )

  user:any;
  message:any;

  constructor(private service:StudentService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['studentId'])
    let resp = this.service.getById(this.router.snapshot.params['studentId']);
    resp.subscribe((data)=>this.user=data);

  }

  updateNow()
  {
    let resp = this.service.update(this.user);
    resp.subscribe((data)=>this.message=data);
  }

}
