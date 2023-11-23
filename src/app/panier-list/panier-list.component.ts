import { Component, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { PanierItem } from '../panier/panier.state';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-panier-list',
  templateUrl: './panier-list.component.html',
  styleUrls: ['./panier-list.component.css'],
})
export class PanierListComponent {
  @Input() products: any[] = [];
  @Input()
  panierItems: PanierItem[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any[]) => {
      this.products = data;
    });
  }
}
