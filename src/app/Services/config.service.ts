import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';

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

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public API: string = "https://basic-nike-app.herokuapp.com/nike/men/new-releases";

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.API);
  }

  getDetai(category_id:string){
    return this.http.get("https://shop-agora.herokuapp.com/api/products",{ params : { category_id }})
  }
}
