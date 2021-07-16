import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courseName = null
  courses = [
    {
      id:1,
      course:"Angular", 
      description: "learn Angular js",
      percentage: 20,
      favourite:true
    },{
      id:2,
      course:"javascript", 
      description: "Will is the guy",
      percentage: 30,
      favourite:true
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  selectCourse(course){
    console.log(course);
    this.courseName = course
  }
}
