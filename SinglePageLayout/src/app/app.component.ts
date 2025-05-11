import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductDetailsComponent } from "../ProductDetails/product-details/product-details.component";
import { ProductHeaderComponent } from "../ProductHeader/product-header/product-header.component";
import { OfferListComponent } from "../OfferList/offer-list/offer-list.component";
import { ImageSidebarComponent } from "../IphoneImageSideBar/image-sidebar/image-sidebar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [CommonModule, ProductDetailsComponent, ProductHeaderComponent, OfferListComponent, ImageSidebarComponent]
})
export class AppComponent {
  activeIndex: number = 0;
  title = 'SinglePageLayout';

  updateActiveIndex(index: number) {
    this.activeIndex = index;
    console.log('Active Index from Product Details:', this.activeIndex);  // You can use it for other logic
  }
}
