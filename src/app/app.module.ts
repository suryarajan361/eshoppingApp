import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { AppMaterialModule } from './app-material/app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthService } from './auth/auth.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { SlideComponent } from './slide/slide.component';
import { MenuComponent } from './menu/menu.component';
import {MatMenuModule} from '@angular/material/menu';
import { NavbarComponent } from './navbar/navbar.component';
import { ShopComponent } from './shop/shop.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './product/product.component';
import { ImageComponent } from './image/image.component';
import { MatIconModule } from "@angular/material/icon";
import { RegisterComponent } from './register/register.component';
import { DetailsComponent } from './details/details.component';
import { FashionComponent } from './fashion/fashion.component';
import bootstrap from "bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    SlideComponent,
    MenuComponent,
    NavbarComponent,
    ShopComponent,
    ProductComponent,
    ImageComponent,
    RegisterComponent,
    DetailsComponent,
    FashionComponent,
    
   
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppMaterialModule,
    NgImageSliderModule,
    
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCarouselModule,
    HttpClientModule,
    MatIconModule,
   
    MatMenuModule
  ],
  providers: [AuthGuard,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
