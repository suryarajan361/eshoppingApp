import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  {

  constructor(private router: Router) {}

  gotoHome(){
      this.router.navigate(['/shop']);  // define your component where you want to go
  }

}
