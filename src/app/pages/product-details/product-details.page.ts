import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonContent, IonIcon, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, cartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, IonButton, CommonModule, RouterLink],
})
export class ProductDetailsPage implements OnInit {
  currentProduct: any = null;

  addToCart(item: any) {
    item.added = true;

   
    setTimeout(() => {
      item.added = false;
    }, 2000);
  }

  products: any = {
    lover: {
      title: 'LOVER',
      vibe: 'COZY & SWEET',
      accent: '#D4A373',
      mainImg: '../../../assets/promotwo.png', // Main big image
      items: [
        {
          name: 'Caramel Bliss',
          price: '₱ 150',
          desc: 'Blonde roast & vanilla.',
          img: 'assets/lover-1.png',
        },
        {
          name: 'Cloud Foam',
          price: '₱ 180',
          desc: 'Sweet layered caramel.',
          img: 'assets/lover-2.png',
        },
        {
          name: 'Honey Latte',
          price: '₱ 165',
          desc: 'Smooth floral notes.',
          img: 'assets/lover-3.png',
        },
        {
          name: 'Berry Whip',
          price: '₱ 175',
          desc: 'Strawberry infused cold brew.',
          img: 'assets/lover-4.png',
        },
      ],
    },
    single: {
      title: 'SINGLE',
      vibe: 'BOLD & INDEPENDENT',
      accent: '#967969',
      mainImg: 'assets/single-hero.png',
      items: [
        {
          name: 'Midnight',
          price: '₱ 140',
          desc: 'Pure black espresso.',
          img: 'assets/single-1.png',
        },
        {
          name: 'Solo Brew',
          price: '₱ 160',
          desc: '18-hour steep cold brew.',
          img: 'assets/single-2.png',
        },
        {
          name: 'Indie Roast',
          price: '₱ 155',
          desc: 'Single-origin nutty notes.',
          img: 'assets/single-3.png',
        },
        {
          name: 'Lone Mocha',
          price: '₱ 170',
          desc: 'Dark chocolate intensity.',
          img: 'assets/single-4.png',
        },
      ],
    },
    broken: {
      title: 'BROKEN',
      vibe: 'DARK & INTENSE',
      accent: '#4B3621',
      mainImg: 'assets/broken-hero.png',
      items: [
        {
          name: 'Salted Tear',
          price: '₱ 170',
          desc: 'Cocoa with sea salt.',
          img: 'assets/broken-1.png',
        },
        {
          name: 'Bitter Truth',
          price: '₱ 190',
          desc: 'Double-shot ristretto.',
          img: 'assets/broken-2.png',
        },
        {
          name: 'Dark Hour',
          price: '₱ 185',
          desc: 'Charcoal-roasted beans.',
          img: 'assets/broken-3.png',
        },
        {
          name: 'Mended Cup',
          price: '₱ 195',
          desc: 'Extra cream for the soul.',
          img: 'assets/broken-4.png',
        },
      ],
    },
    family: {
      title: 'W/FAMILY',
      vibe: 'CLASSIC & SHARED',
      accent: '#8B4513',
      mainImg: 'assets/family-hero.png',
      items: [
        {
          name: 'Heritage',
          price: '₱ 450',
          desc: '1L signature house blend.',
          img: 'assets/family-1.png',
        },
        {
          name: 'Sampler',
          price: '₱ 550',
          desc: 'Four mini-lattes tray.',
          img: 'assets/family-2.png',
        },
        {
          name: 'Sunday Bin',
          price: '₱ 600',
          desc: 'Bulk brew for groups.',
          img: 'assets/family-3.png',
        },
        {
          name: 'Grand Latte',
          price: '₱ 480',
          desc: 'Family-sized classic.',
          img: 'assets/family-4.png',
        },
      ],
    },
  };

  constructor(private route: ActivatedRoute) {
    addIcons({ chevronBackOutline, cartOutline });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.currentProduct = this.products[id || 'lover'];
  }
}
