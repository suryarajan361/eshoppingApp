import { HttpClient,HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { catchError, retry } from 'rxjs/operators'

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {
  listData:any;

  constructor(private httpClient: HttpClient){

  }

  ngOnInit(){
    this.httpClient.get<any>("assets/data/lists.json").subscribe((data)=>
      this.listData = data
    )
  }
}
