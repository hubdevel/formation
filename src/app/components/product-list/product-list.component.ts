import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  inStock: boolean;
  imageUrl: string;
}


@Component({
  selector: 'app-product-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})


export class ProductListComponent {


  title = 'Liste des Produits';
  showDetails = false;
  searchTerm = '';

  products: Product[] = [
    {
      id: 1,
      name: 'Ordinateur Portable',
      price: 899.99,
      description: 'PC portable haute performance',
      category: 'Informatique',
      inStock: true,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Souris Sans Fil',
      price: 29.99,
      description: 'Souris ergonomique sans fil',
      category: 'Accessoires',
      inStock: true,
      imageUrl: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      name: 'Clavier Mécanique',
      price: 79.99,
      description: 'Clavier mécanique RGB',
      category: 'Accessoires',
      inStock: false,
      imageUrl: 'https://via.placeholder.com/150'
    }
  ];


  toggleDetails(): void {
    this.showDetails = !this.showDetails;
  }

  onProductClick(product: Product): void {
    console.log('Produit sélectionné:', product);
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }
}
