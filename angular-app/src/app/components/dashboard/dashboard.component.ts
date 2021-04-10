import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  urls:any=[];
  names=["Dexter Morgan","Johny Depp","Angelina","Raman Raghav"];
  public employees:any;
  constructor() {
    this.urls=["../../../assets/images/dummy.jpg",
    "../../../assets/images/dummy1.jpg",
    "../../../assets/images/dummy2.jpg",
    "../../../assets/images/dummy3.jpg"];
   }
  
  ngOnInit(): void {
    this.employees=[
      {
        name:"Dexter Morgan",
        url:"../../../assets/images/dummy.jpg"
      },
      {
       name:"Johny Depp",
       url:"../../../assets/images/dummy1.jpg"
     },
     {
       name:"Angelina",
       url:"../../../assets/images/dummy2.jpg"
     },
     {
       name:"Raman Raghav",
       url:"../../../assets/images/dummy3.jpg"
     }
 ];
  }
  
}
