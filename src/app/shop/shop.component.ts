import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent  implements OnInit {
  productData:any;

  constructor(private httpClient: HttpClient){

  }

  ngOnInit(){
    this.httpClient.get<any>("assets/data/products.json").subscribe((data)=>
      this.productData = data
    )
  }
 

}