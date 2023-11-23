import { State, Action, StateContext } from '@ngxs/store';
import { PanierStateModel, AjouterAuPanier, RetirerDuPanier } from './panier.state';


@State<PanierStateModel>({
  name: 'panier',
  defaults: {
    items: []
  }
})
export class PanierState {
  static getItems(getItems: any): (target: import("./panier.component").PanierComponent, propertyKey: "items$") => void {
       throw new Error('Method not implemented.');
   }
   @Action(AjouterAuPanier)
   ajouterAuPanier(ctx: StateContext<PanierStateModel>, action: AjouterAuPanier) {
       const state = ctx.getState();
       ctx.patchState({
           items: [...state.items, action.payload]
       });
   }
   @Action(RetirerDuPanier)
   retirerDuPanier(ctx: StateContext<PanierStateModel>, action: RetirerDuPanier) {
       const state = ctx.getState();
       ctx.patchState({
           items: state.items.filter(item => item.id !== action.id)
       });
  }

}
