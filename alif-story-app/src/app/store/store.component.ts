import { Component } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent {
  packs = [
    {
      title: "3 PROPHÈTES ET 1 LIVRET",
      age: "A partir de 3 ans",
      description: "Offrir aux enfants la possibilité d'explorer des récits",
      price: "39,00 €"
    },
    {
      title: "3 PROPHÈTES ET 1 LIVRET",
      age: "A partir de 3 ans",
      description: "Offrir aux enfants la possibilité d'explorer des récits",
      price: "39,00 €"
    },
    {
      title: "3 PROPHÈTES ET 1 LIVRET",
      age: "A partir de 3 ans",
      description: "Offrir aux enfants la possibilité d'explorer des récits",
      price: "39,00 €"
    },
    {
      title: "3 PROPHÈTES ET 1 LIVRET",
      age: "A partir de 3 ans",
      description: "Offrir aux enfants la possibilité d'explorer des récits",
      price: "39,00 €"
    },
    {
      title: "3 PROPHÈTES ET 1 LIVRET",
      age: "A partir de 3 ans",
      description: "Offrir aux enfants la possibilité d'explorer des récits",
      price: "39,00 €"
    }
  ];
  initialPacksCount = 4;
  displayedPacks: any[] = [];
  displayMore: any[] = [];
  pack: any[] = [];
  constructor() {
    this.displayedPacks = this.packs.slice(0, this.initialPacksCount);
    this.displayMore = this.packs.slice(0, this.initialPacksCount);
    this.pack = this.packs.slice(0, 1);


  }

  loadMorePacks() {
    this.displayMore = this.packs;
  }

}
