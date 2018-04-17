import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'user',
  templateUrl:'user.component.html',
  styleUrls:['user.component.css']
})
export class UserComponent  { 
  username:string;
  email:string;
  hobbies:string[];
  showHobbies:boolean;
  allMovies:string;

  constructor(){
    console.log('constructor ran');
    this.username = 'Alex fleming';
    this.email = 'alex@fun.com';
    this.hobbies = ['cricket','music','movies','travel'];
    this.showHobbies = false;
  } 

  toggleHobby(){
    this.showHobbies = !this.showHobbies;
  }

  getAllMovies(){
    this.allMovies = 'https://ghibliapi.herokuapp.com/films/';
  } 

  /*addHobby(hobby){
    this.hobbies.push(hobby);
  }

  deleteHobby(i){
    this.hobbies.splice(i,1);
  }*/
}

