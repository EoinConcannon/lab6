import { Component,OnInit } from '@angular/core';
import { StudentService } from './Services/student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'student-app';
  students:any[]=[];
  forecast:any[]=[];

  ngOnInit():void{
    this.service.getStudentData().subscribe((data)=>{
      this.students = data.students;//gets everything
    });

    this.service.getWeatherData().subscribe((data)=>{
      this.forecast = data.weather;//only gets weather array
    });
  }

  constructor(private service:StudentService){}//local instance of object
}
