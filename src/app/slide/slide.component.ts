import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';



@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
})

export class SlideComponent  {

  slides = [ {'image': 'https://wws-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMjAvMDEvMDIvMTYvMjkvMDIvNjEzLzIwMTkxMjA1XzIwMjBfQmVzdF9IZWFkcGhvbmVzX0Jsb2dfSGVhZGVyLmpwZyJdXQ/20191205-2020-Best-Headphones-Blog-Header.jpg?sha=dbed64f81a04294b'},
     {'image':'https://i.gadgets360cdn.com/large/Moto_Razr_Banner_1584083158113.PNG'},
 
    
  {'image':'https://img1a.flixcart.com/www/email/images/20170922-165755-Blockbuster_sale.jpg'},
  {'image': 'https://www.gizmochina.com/wp-content/uploads/2019/10/Red-Magic-3S-Variants-in-India.png'},
  
  
    {'image': 'https://i.pinimg.com/originals/37/e9/e0/37e9e012b6e0f2a3edf47438f066958d.jpg'}];
  
   

    
}

 
