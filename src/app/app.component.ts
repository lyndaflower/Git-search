import { Component } from '@angular/core';
import { GitHubService } from './gitHub-service/git-hub.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Git-search';
  constructor ( private svc: GitHubService, private  http : HttpClient  ) {
  this.svc.printToConsole("Got it")
  }
  ngOnInit() {
   let obs =  this.http.get('https://api.github.com/users/lyndaflower');
  obs.subscribe((response) => console.log(response));
}
}
