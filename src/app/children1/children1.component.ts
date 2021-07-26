import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-children1',
  templateUrl: './children1.component.html',
  styleUrls: ['./children1.component.scss']
})
export class Children1Component implements OnInit {

  public params!:string;
  constructor(public routerService: Router, public paramsRoute : ActivatedRoute) { }

  ngOnInit(): void {
    // this.params = this.paramsRoute.snapshot.params['id'];
    this.changeParamPage()
  }

  public changeParamPage(){
     this.paramsRoute.params.subscribe((data)=>{
      console.log(data)
    })
  }

}
