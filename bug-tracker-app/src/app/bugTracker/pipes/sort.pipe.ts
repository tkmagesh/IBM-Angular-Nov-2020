import { Pipe, PipeTransform } from "@angular/core";

interface Comparer{
    (x:any, y:any):number
}

@Pipe({
    name : 'sort'
})
export class SortPipe implements PipeTransform{
    private getDescendingComparer(comparer : Comparer) : Comparer {
        return function(x: any, y: any): number {
          return comparer(x, y) * -1;
        };
    }
    private getComparer(attrName : string, sortByDesc : boolean) : Comparer{
        const comparer : Comparer = function(x : any, y : any) : number {
            if (x[attrName] < y[attrName]) return -1;
            if (x[attrName] > y[attrName]) return 1;
            return 0;
        };
        if (sortByDesc) return this.getDescendingComparer(comparer);
        return comparer;
    }
    transform( data : any[], attrName : string, sortByDesc : boolean = false ) : any[] {
        if (!data || !data.length || !attrName ) return data;
        const comparer = this.getComparer( attrName, sortByDesc );
        return data.sort( comparer);
    }
}