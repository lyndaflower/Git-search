import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GitHubService {
 
printToConsole(arg){
  console.log(arg);
}
  constructor() { 
  }
}
