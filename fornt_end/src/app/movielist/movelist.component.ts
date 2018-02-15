import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { student } from '../student';

@Component({
  selector: 'app-movelist',
  templateUrl: './movelist.component.html',
  styleUrls: ['./movelist.component.css']
})
export class MovielistComponent implements OnInit {
  
  selectedStudent: student;
  public students:any;
  constructor(private studentservice:MovieService) { }

  selectStudent(student: student) {
    this.selectedStudent = student;
  }

  ngOnInit() {
    this.studentservice.getstudents().subscribe(studentsresponse=>{
      this.students=studentsresponse;
      console.log(studentsresponse);
    })
  }

}
