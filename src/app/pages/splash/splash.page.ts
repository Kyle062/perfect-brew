import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router'; // <--- MUST ADD THIS
import { IonContent, IonButton } from '@ionic/angular/standalone'; // <--- ADD IonButton

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton, // <--- ADD THIS
    CommonModule,
    FormsModule,
    RouterLink, // <--- ADD THIS
  ],
})
export class SplashPage {
  constructor() {}
}
