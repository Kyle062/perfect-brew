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
  phonePortraitOutline,
  heartOutline,
  rocketOutline,
  starOutline,
  flashOutline,
  cubeOutline,
  locateOutline,
  giftOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon],
})
export class Tab5Page {
  constructor(private alertController: AlertController) {
    addIcons({
      cafeOutline,
      phonePortraitOutline,
      heartOutline,
      rocketOutline,
      starOutline,
      flashOutline,
      cubeOutline,
      locateOutline,
      giftOutline,
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
