import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
interface b { a:number }
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [UserService]
})
export class HomeComponent implements OnInit {
  public name:string = "Nguyen tuan canh";
  public age!:b;
  public adress:string[] = ["QN", "DN", "HN", "HCM", "NT"]
  constructor(private user:UserService) {
   }

  ngOnInit(): void {
    this.age = this.user.age;
  }

  public addAge():void{
    this.user.addAge();
    console.log(this.age);
    // this.age = this.user.age;
  }

}
