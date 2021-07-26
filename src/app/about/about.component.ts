import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  providers: [UserService]
})
export class AboutComponent implements OnInit {
  // @Input("title") title!:string;
  public age!: number;
  private _title!: string;

  constructor(private user: UserService) {
  }

  public navigate(){
    localStorage.setItem("navigate", "navigate");
  }

  ngOnInit(): void {
    // this.age = this.user.age;
  }




























  @Input()
  set title(title: string) {
    this._title = title;
  }
  get title(): string {
    return this._title;
  }

  @Output("childToParent")
  public childToParent = new EventEmitter<string>();
  public onSubmit(){
    this.childToParent.emit(this.title + "123456789")
  }
}
