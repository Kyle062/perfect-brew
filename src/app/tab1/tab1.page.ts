import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonIcon,
  IonButton,
  IonCard,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { swapVerticalOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSearchbar,
    IonIcon,
    IonButton,
    IonCard,
  ],
})
export class Tab1Page {
  constructor(private router: Router) {
    addIcons({ swapVerticalOutline });
  }

  navigateToProduct(category: string) {
    this.router.navigate(['/product-details', category]);
  }

  openFilter() {
    console.log('Filter button clicked');
  }
}
