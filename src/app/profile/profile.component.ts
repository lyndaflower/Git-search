import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
userName : string = "";
response: any;
  constructor(private  http: HttpClient ) {
  
   }

  ngOnInit() {
  }
search(){
 this.http.get('https://api.github.com/users/' + this.userName)
.subscribe((response) => {
  this.response = response;
  console.log(this.response);
  
})
}
}
