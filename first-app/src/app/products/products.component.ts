import { Component } from "@angular/core";
import { ProductsModel } from './ProductsModel';

@Component({
    selector : 'app-products',
    templateUrl : './products.component.html'
})
export class ProductsComponent {
    model: ProductsModel = new ProductsModel();
}