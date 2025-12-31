import { Injectable } from '@angular/core';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private products: Product[] = [
    {
      id: 1,
      name: 'Ordinateur Portable',
      price: 899.99,
      description: 'PC portable haute performance avec processeur i7',
      category: 'Informatique',
      inStock: true,
      imageUrl: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Laptop'
    },
    {
      id: 2,
      name: 'Souris Sans Fil',
      price: 29.99,
      description: 'Souris ergonomique sans fil avec 6 boutons',
      category: 'Accessoires',
      inStock: true,
      imageUrl: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Mouse'
    },
    {
      id: 3,
      name: 'Clavier Mécanique',
      price: 79.99,
      description: 'Clavier mécanique RGB avec switches Cherry MX',
      category: 'Accessoires',
      inStock: false,
      imageUrl: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Keyboard'
    },
    {
      id: 4,
      name: 'Écran 27 pouces',
      price: 299.99,
      description: 'Écran 4K avec technologie IPS',
      category: 'Informatique',
      inStock: true,
      imageUrl: 'https://via.placeholder.com/150/FFFF00/000000?text=Monitor'
    },
    {
      id: 5,
      name: 'Webcam HD',
      price: 59.99,
      description: 'Webcam Full HD 1080p avec micro intégré',
      category: 'Accessoires',
      inStock: true,
      imageUrl: 'https://via.placeholder.com/150/FF00FF/FFFFFF?text=Webcam'
    }
  ];

  constructor() { }

  /**
   * Récupérer tous les produits
   */
  getProducts(): Product[] {
    return this.products;
  }

  /**
   * Récupérer un produit par son ID
   */
  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  /**
   * Ajouter un nouveau produit
   */
  addProduct(product: Product): void {
    // Générer un nouvel ID
    const newId = this.products.length > 0 
      ? Math.max(...this.products.map(p => p.id)) + 1 
      : 1;
    
    const newProduct = { ...product, id: newId };
    this.products.push(newProduct);
  }

  /**
   * Mettre à jour un produit existant
   */
  updateProduct(id: number, updatedProduct: Product): boolean {
    const index = this.products.findIndex(p => p.id === id);
    
    if (index !== -1) {
      this.products[index] = { ...updatedProduct, id };
      return true;
    }
    return false;
  }

  /**
   * Supprimer un produit
   */
  deleteProduct(id: number): boolean {
    const initialLength = this.products.length;
    this.products = this.products.filter(p => p.id !== id);
    return this.products.length < initialLength;
  }

  /**
   * Rechercher des produits par nom
   */
  searchProducts(searchTerm: string): Product[] {
    if (!searchTerm.trim()) {
      return this.products;
    }
    
    const term = searchTerm.toLowerCase();
    return this.products.filter(product => 
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term)
    );
  }

  /**
   * Filtrer par catégorie
   */
  getProductsByCategory(category: string): Product[] {
    return this.products.filter(p => p.category === category);
  }

  /**
   * Récupérer les produits en stock
   */
  getInStockProducts(): Product[] {
    return this.products.filter(p => p.inStock);
  }

  /**
   * Récupérer toutes les catégories uniques
   */
  getCategories(): string[] {
    const categories = this.products.map(p => p.category);
    return [...new Set(categories)];
  }
}