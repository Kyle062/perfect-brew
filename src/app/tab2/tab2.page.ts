import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chevronBackOutline,
  chevronForwardOutline,
  cartOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonButton, IonIcon],
})
export class Tab2Page implements OnInit {
  allProducts: any[] = [];
  paginatedProducts: any[] = [];
  currentPage: number = 0;
  itemsPerPage: number = 6;

  products: any = {
    lover: {
      title: 'LOVER',
      items: [
        {
          name: 'Caramel Bliss',
          price: '₱ 150',
          img: '../../../assets/coffeetwo/two1.jpg',
        },
        {
          name: 'Cloud Foam Matcha',
          price: '₱ 180',
          img: '../../../assets/coffeetwo/two2.jpg',
        },
        {
          name: 'Sea Salt Matcha',
          price: '₱ 165',
          img: '../../../assets/coffeetwo/two3.jpg',
        },
        {
          name: 'Biscoff Latte',
          price: '₱ 175',
          img: '../../../assets/coffeetwo/two4.jpg',
        },
      ],
    },
    single: {
      title: 'SINGLE',
      items: [
        {
          name: 'Midnight Espresso',
          price: '₱ 140',
          img: '../../../assets/coffeesingle/single1.jpg',
        },
        {
          name: 'Matcha Solo',
          price: '₱ 160',
          img: '../../../assets/coffeesingle/single2.jpg',
        },
        {
          name: 'Indie Roast Cold Brew',
          price: '₱ 155',
          img: '../../../assets/coffeesingle/single3.jpg',
        },
        {
          name: 'Strawberry Lone Mocha',
          price: '₱ 170',
          img: '../../../assets/coffeesingle/single4.jpg',
        },
      ],
    },
    broken: {
      title: 'BROKEN',
      items: [
        {
          name: 'Salted Tear Latte',
          price: '₱ 170',
          img: '../../../assets/coffeebroken/broken1.jpg',
        },
        {
          name: 'Bitter Truth',
          price: '₱ 190',
          img: '../../../assets/coffeebroken/broken2.jpg',
        },
        {
          name: 'Dark Hour Matcha',
          price: '₱ 185',
          img: '../../../assets/coffeebroken/broken3.jpg',
        },
        {
          name: 'Mended Cup',
          price: '₱ 195',
          img: '../../../assets/coffeebroken/broken4.jpg',
        },
      ],
    },
    family: {
      title: 'W/FAMILY',
      items: [
        {
          name: 'Heritage Blend',
          price: '₱ 450',
          img: '../../../assets/coffeefamily/family1.jpg',
        },
        {
          name: 'Sampler Tray',
          price: '₱ 550',
          img: '../../../assets/coffeefamily/family2.jpg',
        },
        {
          name: 'Sunday Bin',
          price: '₱ 600',
          img: '../../../assets/coffeefamily/family3.jpg',
        },
        {
          name: 'Grand Latte',
          price: '₱ 480',
          img: '../../../assets/coffeefamily/family4.jpg',
        },
      ],
    },
  };

  constructor() {
    addIcons({ chevronBackOutline, chevronForwardOutline, cartOutline });
  }

  ngOnInit() {
    this.flattenProducts();
    this.updatePage();
  }

  flattenProducts() {
    this.allProducts = [];
    Object.keys(this.products).forEach((key) => {
      const category = this.products[key];
      category.items.forEach((item: any) => {
        this.allProducts.push({
          categoryTitle: category.title,
          itemName: item.name,
          itemPrice: item.price,
          img: item.img,
          added: false,
        });
      });
    });
  }

  updatePage() {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedProducts = this.allProducts.slice(start, end);
  }

  addToCart(item: any) {
    item.added = true;
    setTimeout(() => {
      item.added = false;
    }, 2000);
  }

  nextPage() {
    if ((this.currentPage + 1) * this.itemsPerPage < this.allProducts.length) {
      this.currentPage++;
      this.updatePage();
    }
  }

  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePage();
    }
  }
}
