import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgIf } from '@angular/common'; // Required for *ngIf in standalone

// Ionic UI components
import { IonApp, IonRouterOutlet, IonIcon } from '@ionic/angular/standalone';

// Icons setup
import { addIcons } from 'ionicons';
import {
  home,
  gridOutline,
  personOutline,
  callOutline,
  peopleOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonIcon, NgIf],
})
export class AppComponent {
  currentRoute: string = '';

  constructor(private router: Router) {
    // Register icons so they work globally
    addIcons({ home, gridOutline, personOutline, callOutline, peopleOutline });

    // Track route changes to hide/show navbar and highlight active tab
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.currentRoute = event.urlAfterRedirects;
        console.log('Current Path:', this.currentRoute); // Helpful for debugging
      });
  }

  // Logic to hide navbar on the Splash screen
  showNavbar(): boolean {
    // This must match the 'path' names in your routes file
    return this.currentRoute !== '/' && this.currentRoute !== '/splash';
  }

  // Navigation logic for custom buttons
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
