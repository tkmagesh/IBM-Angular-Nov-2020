export class ProductsModel {
    list : string[] = [];

    addNew(productName){
        this.list.push(productName);
    }

    remove(productName){
        this.list.splice(this.list.indexOf(productName), 1);
    }
}