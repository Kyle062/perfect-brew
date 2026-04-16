import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonContent,
  IonIcon,
  IonItem,
  IonList,
  IonLabel,
  IonButton,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  settingsOutline,
  personAddOutline,
  logOutOutline,
  chevronForwardOutline,
  pencilOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonIcon,
    IonItem,
    IonList,
    IonLabel,
    IonButton,
    CommonModule,
  ],
})
export class Tab3Page {
  constructor(private router: Router) {
    addIcons({
      settingsOutline,
      personAddOutline,
      logOutOutline,
      chevronForwardOutline,
      pencilOutline,
    });
  }

  goToInvite() {
    this.router.navigate(['/invite']);
  }

  goToSettings() {
    this.router.navigate(['/settings']);
  }

  goToLeaveAccount() {
    this.router.navigate(['/leave-account']);
  }
}
