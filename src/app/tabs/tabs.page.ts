import { Component } from '@angular/core';
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonRouterOutlet,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  home,
  gridOutline,
  personOutline,
  callOutline,
  peopleOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonRouterOutlet],
})
export class TabsPage {
  constructor() {
    addIcons({ home, gridOutline, personOutline, callOutline, peopleOutline });
  }
}
