import { Component } from "@angular/core";

@Component({
    selector : 'app-products',
    templateUrl : './products.component.html'
})
export class ProductsComponent {
    productNames : string[] = [ /* 'Scribble Pad', 'Marker', 'Stapler' */ ];

    onAddClick(productName : string) {
        this.productNames.push(productName);
    }

    onRemoveClick(productName : string){
        this.productNames.splice(this.productNames.indexOf(productName), 1);
    }
}