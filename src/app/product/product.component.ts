import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { catchError, retry } from 'rxjs/operators'
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  itemData:any;
 id:string;

  constructor(private httpClient: HttpClient,private _activatedRoute:ActivatedRoute,
    private _router:Router){

  }

  ngOnInit(){
    this.id = localStorage.getItem('token');
    this.httpClient.get<any>("assets/data/items.json").subscribe((data)=>
      this.itemData = data
    )
  }
}