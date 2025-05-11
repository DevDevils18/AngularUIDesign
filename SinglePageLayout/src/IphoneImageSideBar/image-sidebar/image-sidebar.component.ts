import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-image-sidebar',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './image-sidebar.component.html',
  styleUrl: './image-sidebar.component.scss'
})
export class ImageSidebarComponent {
allImages: string[] = [
    'assets/Iphone16Pro1.jpeg',
    'assets/Iphone16Pro2.jpeg',
    'assets/Iphone16Pro3.jpeg',
    'assets/Iphone16Pro4.jpeg',
    'assets/Iphone16Pro5.jpeg',
  ];

  visibleCount = 3; // initially show 3 images
  get visibleImages() {
    return this.allImages.slice(0, this.visibleCount);
  }

  get hasMoreImages() {
    return this.visibleCount < this.allImages.length;
  }

  showMore() {
    this.visibleCount += 3;
  }
}
