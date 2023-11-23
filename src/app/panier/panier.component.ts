import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PanierItem, PanierStateModel, RetirerDuPanier } from './panier.state';
import { PanierState } from './PanierState';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent {
  @Select((state: { panier: { items: any; }; }) => state.panier.items)
  panierItems$!: Observable<PanierItem[]>;
  panier: any[] = [];
  @Select(PanierState.getItems) items$!: Observable<string[]>;
  ajouterAuPanier(produit: any): void {
    this.panier.push(produit);
  }
  constructor(private store: Store) { }
  retirerDuPanier(product: string): void {
    this.store.dispatch(new RetirerDuPanier(product));
  }
}
