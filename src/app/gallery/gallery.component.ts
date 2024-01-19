import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  images: string[] = [];
  selectedImageIndex = 0;
  selectedImage: string;
  slideWidth = 400; // Adjust this value to match the width of your images

  constructor() {
    for (let i = 1; i <= 10; i++) {
      const t = i < 10 ? ('0' + i) : i;
      this.images.push(`assets/images/${t}.jpg`);
    }
    
    // Add additional images with different paths
    this.images.push('assets/images/resto1.jpg');  // Example image 1
    this.images.push('assets/images/resto2.jpg'); 
      // Example image 2
      this.images.push('assets/images/resto3.jpg');
      this.images.push('assets/images/resto4.jpg');
      this.images.push('assets/images/resto5.jpg');
      this.images.push('assets/images/resto6.jpg');
      this.images.push('assets/images/resto1.jpg');
      this.images.push('assets/images/resto2.jpg');
      this.images.push('assets/images/resto3.jpg');
      this.images.push('assets/images/resto4.jpg');
      this.images.push('assets/images/resto5.jpg');
      this.images.push('assets/images/resto2.jpg');
    // Add more images as needed
    
    this.selectedImage = this.images[this.selectedImageIndex];
  }

  selectImage(idx: number): void {
    this.selectedImageIndex = idx;
    this.selectedImage = this.images[this.selectedImageIndex];
  }

  nextImage(): void {
    if (this.selectedImageIndex === (this.images.length - 1)) {
      this.selectImage(0);
    } else {
      this.selectImage(this.selectedImageIndex + 1);
    }
  }

  prevImage(): void {
    if (this.selectedImageIndex === 0) {
      this.selectImage(this.images.length - 1);
    } else {
      this.selectImage(this.selectedImageIndex - 1);
    }
  }
}
