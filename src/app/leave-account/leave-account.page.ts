import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
  AlertController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  warningOutline,
  informationCircleOutline,
  logOutOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-leave-account',
  templateUrl: './leave-account.page.html',
  styleUrls: ['./leave-account.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonBackButton,
    IonButton,
    IonIcon,
  ],
})
export class LeaveAccountPage {
  constructor(
    private router: Router,
    private alertController: AlertController,
  ) {
    addIcons({
      warningOutline,
      informationCircleOutline,
      logOutOutline,
    });
  }

  cancel() {
    this.router.navigate(['/tab3']);
  }

  async confirmLeave() {
    const alert = await this.alertController.create({
      header: 'Confirm Deletion',
      message:
        'Are you absolutely sure? This will permanently delete your account and all associated data.',
      backdropDismiss: false,
      buttons: [
        {
          text: 'No, Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Yes, Delete',
          cssClass: 'danger',
          handler: () => {
            this.leaveAccount();
          },
        },
      ],
    });

    await alert.present();
  }

  private leaveAccount() {
    // Add your account deletion/leave logic here
    console.log('Account left successfully');

    // Show success message
    this.showSuccessAndNavigate();
  }

  private async showSuccessAndNavigate() {
    const alert = await this.alertController.create({
      header: 'Account Left',
      message:
        'You have successfully left the account. You will be redirected to the login page.',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            // Navigate to login or splash page
            this.router.navigate(['/splash']); // Change this to your actual login route
          },
        },
      ],
    });

    await alert.present();
  }
}
