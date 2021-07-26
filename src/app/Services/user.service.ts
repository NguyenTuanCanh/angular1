import { Injectable } from '@angular/core';
interface b { a:number }
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public age:b = {
    a : 15
  };
  constructor() { }
  addAge():void{
    this.age.a = 19
  }
  _age():b{
    return this.age;
  }
}
