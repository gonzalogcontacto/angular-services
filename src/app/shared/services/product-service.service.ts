import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private products: Product[] = [
    {
      idx: 1,
      name: "Kevin",
      bio: "Aquí debería haber una biografía de la vida de este minion",
      img: "assets/img/kevin.jpg",
      birth: "1951",
      side:"de los buenos"
    },
    {
      idx: 2,
      name: "Josua",
      bio: "Aquí debería haber una biografía de la vida de este minion",
      img: "assets/img/Josua.jpg",
      birth: "1672",
      side:"malvado"
    },
    {
      idx: 3,
      name: "Dave",
      bio: "Aquí debería haber una biografía de la vida de este minion",
      img: "assets/img/dave.png",
      birth: "1723",
      side: "de los buenos"
    },
    {
      idx: 4,
      name: "Mudito",
      bio: "Aquí debería haber una biografía de la vida de este minion",
      img: "assets/img/mudito.jpeg",
      birth: "1379",
      side:"de los buenos"
    },
    {
      idx: 5,
      name: "Llongueras",
      bio: "Aquí debería haber una biografía de la vida de este minion",
      img: "assets/img/llongueras.jpg",
      birth: "1687",
      side: "malvado"
    },
    {
      idx: 6,
      name: "Minioncé",
      bio: "Le va el cante, dar la nota, ama los karaokes, es el rey y reina de la fiesta",
      img: "assets/img/minionce.jpg",
      birth: "1976",
      side: "de los buenos"
    },
    {
      idx: 7,
      name: "Lobeznion",
      bio: "No lo enfades, este bichillo tiene muy malas pulgas...aunque sólo mide medio metro",
      img: "assets/img/lobeznion.jpg",
      birth: "2017",
      side: "malvado"
    }
];

  constructor() { 
    console.log('Product service listo para usar!');
  }

  getProducts() {
    return this.products;
  }

  getProduct(idx) {
    return this.products[idx];
  }
}

export interface Product {
  idx: number,
  name: string;
  bio: string;
  img: string;
  birth: string;
  side: string;
}
