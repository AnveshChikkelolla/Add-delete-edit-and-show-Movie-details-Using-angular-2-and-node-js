import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import {NgForm} from '@angular/forms';
import { Student } from './student';
import { Router } from '@angular/router';

@Component({  
  moduleId:module.id,
  //selector: 'app-addstudent',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent implements OnInit {

  private students;
  private name;
  private releaseDate;
  private _id;
  private rating;
  private language;
  constructor(private student:MovieService,private router:Router) { }

  addstudent(newStudent){
    let students=this.students;
    console.log("extra",students);
    // let newStudent = {
    //   name:this.name,
    //   college:this.college,
    //   _id:''
    // }
    console.log(newStudent);
    this.student.addstudent(newStudent).subscribe((student)=>{
      console.log(newStudent);
      this.router.navigate(['/movies']);
    })
  }

  ngOnInit() {
    this.student.getstudents().subscribe(students=>{
      this.students=students;
      console.log(students);
    })
  }

}
