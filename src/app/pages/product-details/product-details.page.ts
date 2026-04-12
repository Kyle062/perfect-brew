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
      accent: '#7F6380',
      mainImg: '../../../assets/promotwo.png',
      items: [
        {
          name: 'Caramel Bliss',
          price: '₱ 150',
          desc: 'Layered espresso with a rich, buttery caramel swirl.',
          img: '../../../assets/coffeetwo/two1.jpg',
        },
        {
          name: 'Cloud Foam Matcha',
          price: '₱ 180',
          desc: 'Premium green tea topped with velvety, sweet cold foam.',
          img: '../../../assets/coffeetwo/two2.jpg',
        },
        {
          name: 'Sea Salt Matcha',
          price: '₱ 165',
          desc: 'Smooth matcha whisked with a hint of savory sea salt cream.',
          img: '../../../assets/coffeetwo/two3.jpg',
        },
        {
          name: 'Biscoff Latte',
          price: '₱ 175',
          desc: 'Classic iced latte finished with crunchy Biscoff crumbles.',
          img: '../../../assets/coffeetwo/two4.jpg',
        },
      ],
    },
    single: {
      title: 'SINGLE',
      vibe: 'BOLD & INDEPENDENT',
      accent: '#7F6380',
      mainImg: '../../../assets/promoOne.png',
      items: [
        {
          name: 'Midnight Espresso',
          price: '₱ 140',
          desc: 'Bold, double-layered espresso with a smooth, milky finish.',
          img: '../../../assets/coffeesingle/single1.jpg',
        },
        {
          name: 'Matcha Solo',
          price: '₱ 160',
          desc: 'Earthy, 18-hour cold steeped matcha layered over fresh milk.',
          img: '../../../assets/coffeesingle/single2.jpg',
        },
        {
          name: 'Indie Roast Cold Brew',
          price: '₱ 155',
          desc: 'Intense single-origin cold brew with deep, nutty undertones.',
          img: '../../../assets/coffeesingle/single3.jpg',
        },
        {
          name: 'Strawberry Lone Mocha',
          price: '₱ 170',
          desc: 'Sweet strawberry fusion blended with dark chocolate intensity.',
          img: '../../../assets/coffeesingle/single4.jpg',
        },
      ],
    },
    broken: {
      title: 'BROKEN',
      vibe: 'DARK & INTENSE',
      accent: '#7F6380',
      mainImg: '../../../assets/promobroken.png',
      items: [
        {
          name: 'Salted Tear Latte',
          price: '₱ 170',
          desc: 'Deep cocoa infused with sea salt, labeled with a reminder of grace.',
          img: '../../../assets/coffeebroken/broken1.jpg',
        },
        {
          name: 'Bitter Truth',
          price: '₱ 190',
          desc: 'A double-shot ristretto for those who trust the process.',
          img: '../../../assets/coffeebroken/broken2.jpg',
        },
        {
          name: 'Dark Hour Matcha',
          price: '₱ 185',
          desc: 'Intense charcoal-infused matcha for the longest nights.',
          img: '../../../assets/coffeebroken/broken3.jpg',
        },
        {
          name: 'Mended Cup',
          price: '₱ 195',
          desc: 'Extra cream and a smooth finish to heal the soul.',
          img: '../../../assets/coffeebroken/broken4.jpg',
        },
      ],
    },
    family: {
      title: 'W/FAMILY',
      vibe: 'CLASSIC & SHARED',
      accent: '#7F6380',
      mainImg: '../../../assets/promofamily.png',
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
