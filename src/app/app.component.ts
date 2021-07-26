import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { ConfigService } from './Services/config.service';
interface TypeProduct {
  _id: string,
  path: string,
  slug: string,
  name: string,
  type: string,
  color: number,
  price: number,
  img: string,
  __v: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'DAY LA AP TRUYEN XUONG';
  public number: number = 1;
  public status: boolean = false;
  public childToParent(value: string) {
    console.log(value)
  }
  constructor(public routerService: Router, public ConfigService:ConfigService) { }
  public panigateRoute(name: string) {
    this.routerService.navigate([name])
  }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts(){
    let prt = this.ConfigService.getDetai("2").subscribe((data)=>{
      console.log(data)
      console.log(this.ConfigService)
    });
    // console.log(prt)
  }

}
