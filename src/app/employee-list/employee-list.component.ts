import { Component, OnInit } from '@angular/core';

import { StudentService } from './student.service';
import { Student } from './Student';

@Component({
  selector: 'app-employee-list',
  templateUrl:'./employee.component.html',
  styles: []
})
export class EmployeeListComponent implements OnInit {

  students: Student[];
  constructor(private studentService:StudentService) { }

  ngOnInit() {
    this
      .studentService
      .getStudents()
      .subscribe((data: Student[]) => {
        console.log(data)
        this.students = data;
      });

  }

}
