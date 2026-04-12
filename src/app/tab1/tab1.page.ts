import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonSearchbar,
  IonIcon,
  IonButton,
  IonCard,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  swapVerticalOutline,
  chevronBackOutline,
  chevronForwardOutline,
} from 'ionicons/icons';

interface Category {
  id: string;
  title: string;
  subtext: string;
  image: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonSearchbar,
    IonIcon,
    IonButton,
    IonCard,
    CommonModule,
  ],
})
export class Tab1Page {
  categories: Category[] = [
    {
      id: 'lover',
      title: 'LOVER',
      subtext: 'Warm hearts, golden coffee.',
      image: 'assets/promotwo.png',
    },
    {
      id: 'single',
      title: 'SINGLE',
      subtext: 'Coffee is my only date.',
      image: 'assets/promoOne.png',
    },
    {
      id: 'broken',
      title: 'BROKEN',
      subtext: 'Broken hearts, golden coffee.',
      image: 'assets/promobroken.png',
    },
    {
      id: 'family',
      title: 'FAMILY',
      subtext: 'Home is where coffee brews.',
      image: 'assets/promofamily.png',
    },
  ];

  currentIndex = 0;

  get currentCategory(): Category {
    return this.categories[this.currentIndex];
  }

  constructor(private router: Router) {
    addIcons({
      swapVerticalOutline,
      chevronBackOutline,
      chevronForwardOutline,
    });
  }

  navigateToProduct(id: string) {
    console.log('Navigating to product:', id);
    this.router.navigate(['/product-details', id]);
  }

  nextCard() {
    if (this.currentIndex < this.categories.length - 1) {
      this.currentIndex++;
      console.log('Current card index:', this.currentIndex);
    }
  }

  previousCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      console.log('Current card index:', this.currentIndex);
    }
  }

  goToCard(index: number) {
    this.currentIndex = index;
    console.log('Jumped to card index:', index);
  }

  openFilter() {
    console.log('Filter button clicked');
    // Add your filter logic here
  }
}
