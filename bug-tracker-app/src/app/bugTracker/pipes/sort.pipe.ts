import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name : 'sort'
})
export class SortPipe implements PipeTransform{
    private getComparer(attrName : string){
        return function(x : any, y : any) : number {
            if (x[attrName] < y[attrName]) return -1;
            if (x[attrName] > y[attrName]) return 1;
            return 0
        }
    }
    transform( data : any[], attrName : string ) : any[] {
        if (!data || !data.length || !attrName ) return data;
        const comparer = this.getComparer( attrName );
        return data.sort( comparer);
    }
}