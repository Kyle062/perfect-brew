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

// 1. Import the specific icons here
import { addIcons } from 'ionicons';
import {
  settingsOutline,
  personAddOutline,
  logOutOutline,
  chevronForwardOutline,
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
    });
  }

  goToInvite() {
    this.router.navigate(['/invite']);
  }
}
