import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
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
  @Output() activeIndexChange = new EventEmitter<number>();
 tabs = [
    { title: 'Prices', content: 'The iPhone 16 Pro is priced from £999 for the 128GB model.' },   
    { title: 'Reviews', content: 'The iPhone 16 Pro offers top-notch performance with its powerful A18 chip and stunning 48MP camera. Its sleek design, smooth display, and long battery life make it a standout in the flagship smartphone category' },
    { title: 'Price Development', content: 'The iPhone 16 Pro starts at around $999 for the base model, with prices varying depending on storage options. As newer models are released, the price typically drops, but Apple devices maintain strong resale value.' },
    { title: 'About the Product ', content: 'The iPhone 16 Pro is a high-performance smartphone featuring the powerful A18 chip, a 48MP camera, and a stunning OLED display. It combines sleek design, advanced features, and seamless user experience for tech enthusiasts' },
    { title: 'Specifications', content: 'The iPhone 16 Pro features a 6.3-inch Super Retina XDR OLED display, powered by the A18 Pro chip with a 48MP camera system. It offers up to 1TB of storage, 5G connectivity, and a durable titanium design.' },
  ];

  activeIndex = signal(0);
  setActive(index: number) {
    this.activeIndex.set(index);
    this.activeIndexChange.emit(index);
  }

}
