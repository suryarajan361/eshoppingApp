import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  
  imageObject: Array<object> = [
    {
    image: 'https://d2x02matzb08hy.cloudfront.net/img/clothing/hero_image/78128800/3.jpg',
    thumbImage: 'https://d2x02matzb08hy.cloudfront.net/img/clothing/hero_image/78128800/3.jpg',
    title: 'Black And White Hand Woven Ikat Dress',
    price:3000
  },
  {
    image: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5559085/2018/5/9/11525849854374-Athena-Women-Burgundy-Solid-Maxi-Dress-4291525849853320-1.jpg',
    thumbImage: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/5559085/2018/5/9/11525849854374-Athena-Women-Burgundy-Solid-Maxi-Dress-4291525849853320-1.jpg',
    title: 'Women Burgundy Solid Maxi Dress',
    price:1500
  },
   {
    image: 'https://images-na.ssl-images-amazon.com/images/I/719gWn4ZhOL._UL1500_.jpg',
    thumbImage: 'https://images-na.ssl-images-amazon.com/images/I/719gWn4ZhOL._UL1500_.jpg',
    title: 'Avistar Girls Cotton Blended Frock Dress',
    price:450

  },
   {
    image: 'https://wallpaperheart.com/wp-content/uploads/2018/02/jewellery-wallpapers-Neckless-and-Earrings-Jewellery-HD-wallpaper.jpg ',
    thumbImage: 'https://wallpaperheart.com/wp-content/uploads/2018/02/jewellery-wallpapers-Neckless-and-Earrings-Jewellery-HD-wallpaper.jpg',
    title: 'Necklaces Set',
    price:2000
   
  }, 
  {
    image: 'https://www.mapanache.com/wp-content/uploads/2019/09/Fashionista-designer-solid-black-long-gown-maxi-dress-RS1725.jpg',
    thumbImage: 'https://www.mapanache.com/wp-content/uploads/2019/09/Fashionista-designer-solid-black-long-gown-maxi-dress-RS1725.jpg',
    title: 'Fashionista designer solid black long gown maxi dress',
    price:750
  
  }, 
  {
    image: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2299060/2018/7/30/7584b116-2a2c-4fb1-881c-af58cc484b181532944603854-Tokyo-Talkies-Women-Black-Printed-Maxi-Dress-4791532944603727-1.jpg',
    thumbImage: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2299060/2018/7/30/7584b116-2a2c-4fb1-881c-af58cc484b181532944603854-Tokyo-Talkies-Women-Black-Printed-Maxi-Dress-4791532944603727-1.jpg',
    title: 'Youdesign Georgette Long Dress',
    price:2200
   
  },
   {
    image: 'https://i.pinimg.com/originals/ff/9c/20/ff9c204f62b65141a988cde3c7b1484f.jpg',
    thumbImage: 'https://i.pinimg.com/originals/ff/9c/20/ff9c204f62b65141a988cde3c7b1484f.jpg',
    title: 'Gold Plated Jewels',
    price:1500
   
  } ,
  {
    image: 'https://5.imimg.com/data5/VV/OK/MY-38812841/designer-western-red-long-dress-500x500.jpg',
    thumbImage: 'https://5.imimg.com/data5/VV/OK/MY-38812841/designer-western-red-long-dress-500x500.jpg',
    title: 'Designer Western Red Long Dress',
    price:1570
   
  } ,
  {
    image: 'https://cdn.wallpapersafari.com/87/37/iGnVBk.jpg',
    thumbImage: 'https://cdn.wallpapersafari.com/87/37/iGnVBk.jpg',
    title: 'Diamonds Set',
    price:50000
   
  } 
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
