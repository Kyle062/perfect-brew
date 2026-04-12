import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { chevronBack } from 'ionicons/icons';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.page.html',
  styleUrls: ['./invite.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class InvitePage {
  isCopied: boolean = false; 

  constructor(private location: Location) {
    addIcons({ chevronBack });
  }

  copyCode() {
    this.isCopied = true;

    // Optional: Add actual clipboard functionality
    navigator.clipboard.writeText('192743655');

    setTimeout(() => {
      this.isCopied = false;
    }, 2000);
  }

  goBack() {
    this.location.back();
  }
}
