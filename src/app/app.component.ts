  import { Component, OnInit } from '@angular/core';
  import { ProductService } from './product.service';
  import { Select } from '@ngxs/store';
  import { State, Action, StateContext, Selector } from '@ngxs/store';
  import { Observable } from 'rxjs';  
  import { PanierStateModel } from './panier/panier.state';
  import { PanierState } from './panier/PanierState';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent implements OnInit {
  title = 'TP4';
  @Select(PanierState)
    PanierStateModel!: Observable<PanierStateModel>;
  productsList: any[] = [];
  items: any[] = [];
  
    constructor(private productService: ProductService) {}
  
    ngOnInit(): void {
      this.productService.getProducts().subscribe(
        (data: any[]) => {
          this.productsList = data;
        },
        error => {
          console.error('Error fetching products', error);
        });
        this.PanierStateModel.subscribe(state => {
          this.items = state.items;
        }
      );
    }
}
