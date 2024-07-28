import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit {
  cards = [
    { name: 'Primary card 1', number: '***** 1455', isDefault: true, imgSrc: 'https://www.mastercard.com/news/media/ljadl3ba/mastercard-symbol-tile.png' },
    { name: 'Secondary card 2', number: '***** 2345', isDefault: false, imgSrc: 'https://www.mastercard.com/news/media/ljadl3ba/mastercard-symbol-tile.png' },
    { name: 'Tertiary card 3', number: '***** 6789', isDefault: false, imgSrc: 'https://www.mastercard.com/news/media/ljadl3ba/mastercard-symbol-tile.png' }
  ];

  constructor() {
    this.cards[0].isDefault = true;

   }

  ngOnInit(): void {
    
  }

setDefaultCard(selectedCard: any) {
  this.cards.forEach(card => card.isDefault = false);
  selectedCard.isDefault = true;
}
}
