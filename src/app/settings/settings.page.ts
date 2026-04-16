import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common'; 
import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonIcon, 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBack } from 'ionicons/icons';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton, 
    IonIcon, 
    CommonModule,
  ],
})
export class SettingsPage {
  constructor(private location: Location) {
    addIcons({ chevronBack });
  }

  goBack() {
    this.location.back(); 
  }
}
