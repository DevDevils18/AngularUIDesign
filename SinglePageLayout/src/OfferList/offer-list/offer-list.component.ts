import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-offer-list',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './offer-list.component.html',
  styleUrl: './offer-list.component.scss'
})
export class OfferListComponent {
   offers = [
    {
      seller: 'Compumail',
      title: 'Apple iPhone 16 Pro Max 6.9\" 256GB Black titanium',
      shipping: 'Free shipping, 4–5 days',
      price: 18423
    },
    {
      seller: 'Macrent',
      title: 'iPhone 16 Pro Max 256GB Natural Titanium',
      shipping: 'Back order',
      price: 17485
    },
    {
      seller: 'Power',
      title: 'Apple iPhone 16 Pro Max 256 GB, Natural Titanium',
      shipping: 'Free shipping, 1–2 days',
      price: 17489
    }
  ];

}
