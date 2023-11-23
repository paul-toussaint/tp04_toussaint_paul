import { State, Action, StateContext, Selector } from '@ngxs/store';

export interface PanierItem {
  id: string;
  nom: string;
  quantite: number;
}

export class PanierStateModel {
  items: PanierItem[] = [];
}

export class AjouterAuPanier {
  static readonly type = '[Panier] Ajouter un article';
  constructor(public payload: PanierItem) { }
}

export class RetirerDuPanier {
  static readonly type = '[Panier] Retirer un article';
  constructor(public id: string) { }
}

