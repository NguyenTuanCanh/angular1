import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public name: string = "";
  public age: string = "";
  constructor( public routesServices : Router ) { }

  ngOnInit(): void {
  }
  public onSubmit():void {
    if(this.name === "a" && this.age === "a"){
      let user = {
        name : this.name,
        age : this.age
      }
      localStorage.setItem("user", JSON.stringify(user));
      this.routesServices.navigate(['/lifecycle'])
    }
  }

}


