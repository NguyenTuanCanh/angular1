import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges, ContentChild, ElementRef } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.scss']
})
export class LifecycleHookComponent implements OnInit, OnChanges, OnDestroy {

  @Input("number") number!:number;
  @ContentChild("myActribute") myActribute!:ElementRef;

  constructor(public routerServices : Router, public route:ActivatedRoute) { }

  ngOnInit(): void {
    // console.log("lifecycle ngOnInit ...")
  }

  public logOut(){
    localStorage.removeItem("user");
    this.routerServices.navigate(['/form'])
  }

  ngOnDestroy(): void {
    // console.log("destroyed ....")
  }

  public navigate(name:string){
    // this.routerServices.navigate([`lifecycle/${name}`]);
    this.routerServices.navigate([name],{
      relativeTo : this.route
    })
  }

  ngOnChanges(change : SimpleChanges): void {
    // console.log("ngOnChanges ....")
    // console.log(change)
  }

  ngAfterContentInit(): void {
    // console.log("ngAfterContentInit ...")
  }

  ngAfterContentChecked(): void {
    // console.log("ngAfterContentChecked ...")
    // console.log(this.myActribute)
  }

  public numberLife:number = 100;

}
