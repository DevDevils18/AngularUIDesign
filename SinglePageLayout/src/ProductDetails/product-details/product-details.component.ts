import { Component, inject, signal } from '@angular/core';
import {CommonModule, isPlatformBrowser} from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { ShippingoptionComponent } from "../../ShippingOptions/shippingoption/shippingoption.component";

@Component({
  selector: 'app-product-details',
   standalone: true,
  imports: [CommonModule, ShippingoptionComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  private platformId = inject(PLATFORM_ID);
  isBrowser = isPlatformBrowser(this.platformId); 
 tabs = [
    { title: 'Prices', content: 'This is the overview content.' },   
    { title: 'Reviews', content: 'This is the reviews content.' },
    { title: 'Price Development', content: 'This is the specs content.' },
    { title: 'About the Product ', content: 'This is the specs content.' },
    { title: 'Specifications', content: 'This is the specs content.' },
  ];

  activeIndex = signal(0);
  setActive(index: number) {
    this.activeIndex.set(index);
  }

}
