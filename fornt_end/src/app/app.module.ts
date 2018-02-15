import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
//import { StudentslistComponent } from './movielist/studentslist.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import {RouterModule} from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MovieService } from './services/movie.service';
//import { AddstudentComponent } from './addstudent/addstudent.component';
import {FormsModule} from  '@angular/forms';
//import { EditstudentComponent } from './editmovie/editstudent.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { EditmovieComponent } from './editmovie/editmovie.component';
import { MovielistComponent } from './movielist/movelist.component';
//import { AddstudentComponent } from './addmovie/addstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    MovielistComponent,
    MoviedetailsComponent,
    AddmovieComponent,
    WelcomeComponent,
    EditmovieComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    RouterModule.forRoot([
      {path:'movies',component:MovielistComponent},
      {path:'home',component:WelcomeComponent},
      { path: 'addmovie', component: AddmovieComponent },
      {path:'movies/:name',component:MoviedetailsComponent},
      {path:'movie/:id',component:EditmovieComponent},

      {path:'',redirectTo:'home',pathMatch:"full"}
    ])
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
