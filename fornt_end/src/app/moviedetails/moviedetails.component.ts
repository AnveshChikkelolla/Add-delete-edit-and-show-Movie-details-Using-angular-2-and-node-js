import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { student } from '../student';
//import { StudentslistComponent } from '../movielist/studentslist.component';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.css']
})
export class MoviedetailsComponent implements OnInit {
  
  student:student;
  

  constructor(private studentservice:MovieService,private route:Router,private aroute:ActivatedRoute) { }

  // update(updstudent:NgForm){
  //   this.studentservice.updatestudent(updstudent).subscribe(()=>{
  //     console.log("Updated student with name "+updstudent.name);
  //   })
  //   this.route.navigate(['/students']);
  // }

  delete(name){
    this.studentservice.deletestudent(name).subscribe((student)=>{
      console.log("Deleted student details with name "+name);
    })
    this.route.navigate(['/movies']);
  }

  ngOnInit() {
    this.studentservice.getstudent(this.aroute.snapshot.params['name']).subscribe((student)=>{
      this.student=student;
    })
  }
}
