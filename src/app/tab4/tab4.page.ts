import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonIcon,
  AlertController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  cafeOutline,
  mailOutline,
  callOutline,
  locationOutline,
  logoFacebook,
  logoInstagram,
  chevronForwardOutline,
  storefrontOutline,
  pinOutline,
  timeOutline,
  mapOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon],
})
export class Tab4Page {
  constructor(private alertController: AlertController) {
    addIcons({
      cafeOutline,
      mailOutline,
      callOutline,
      locationOutline,
      logoFacebook,
      logoInstagram,
      chevronForwardOutline,
      storefrontOutline,
      pinOutline,
      timeOutline,
      mapOutline,
    });
  }

  async showAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['OK'],
      cssClass: 'custom-alert',
    });

    await alert.present();
  }
}
