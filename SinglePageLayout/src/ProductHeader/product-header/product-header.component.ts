import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-header',
  standalone: true,
  templateUrl: './product-header.component.html',
  styleUrls: ['./product-header.component.scss'],
  imports: [CommonModule]
})
export class ProductHeaderComponent {
  product = {
    name: 'Apple iPhone 16 Pro Max, 256GB',
    rating: 4.1,
    storageOptions: ['1 TB', '256GB', '512GB'],
    colorOptions: ['All', 'Black', 'White'],
    priceRange: { min: 17190, max: 22038 },
    description:
      'Experience the next generation of mobile technology with the iPhone 16 Pro Max 256GB, equipped with the Apple A18 pro chip and fast 5G connection.',
    imageUrl: 'assets/Iphone16Pro6.jpeg',
  };

  // Default selected indices for storage and color options
  selectedStorageIndex: number = 1; 
  selectedColorIndex: number = 0; 

  // Method to select a storage option
  selectStorage(index: number) {
    this.selectedStorageIndex = index;
  }

  // Method to select a color option
  selectColor(index: number) {
    this.selectedColorIndex = index;
  }
}