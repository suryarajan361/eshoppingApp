import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpErrorResponse } from "@angular/common/http";

import { ActivatedRoute } from '@angular/router';
import {Views} from '../details/views';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 
  views;
    constructor(private route: ActivatedRoute) { }
  
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
        this.views = Views[+params.get('id')];
   });
    }
    addToCart() {
      alert( "  Added to Cart",)
    } 
    
  }