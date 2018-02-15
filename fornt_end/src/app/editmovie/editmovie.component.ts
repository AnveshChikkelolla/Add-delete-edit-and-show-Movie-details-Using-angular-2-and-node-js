import { Component, OnInit } from '@angular/core';
import { student } from '../student';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-editmovie',
  templateUrl: './editmovie.component.html',
  styleUrls: ['./editmovie.component.css']
})
export class EditmovieComponent implements OnInit {

 // student:student;
  
  model = new student();
  constructor(private studentservice:MovieService,private route:Router,private aroute:ActivatedRoute) { }

//  update(updstudent){
//     this.studentservice.updatestudent(updstudent).subscribe(()=>{
//       console.log("Updated student with name "+updstudent.name);
//     })
//     this.route.navigate(['/students']);
//   }

//   delete(name){
//     this.studentservice.deletestudent(name).subscribe((student)=>{
//       console.log("Deleted student details with name "+name);
//     })
//     this.route.navigate(['/students']);
//   }

//   ngOnInit() {
//     this.studentservice.getstudent(this.aroute.snapshot.params['id']).subscribe((student)=>{
//       this.student=student;
//     })
//   }
// }
ngOnInit() {
  this.getEmployee();
}

//model = new Employee();
id = this.aroute.snapshot.params['id'];

getEmployee(){
  this.studentservice.getstudent(this.id)
      .subscribe(employee=>{
        this.model = employee;
      })
}

updateEmployee(){
  console.log("edited data ",this.model);
  this.studentservice.updatestudent(this.id,this.model)
      .subscribe(()=> this.goBack())
}

 goBack(){
  this.route.navigate(['/movies'])
}
}
