import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-leave-account',
  templateUrl: './leave-account.page.html',
  styleUrls: ['./leave-account.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LeaveAccountPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
