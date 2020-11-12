import { Pipe, PipeTransform } from "@angular/core";
import { Bug } from '../models/Bug';

@Pipe({
    name : 'closedCount'
})
export class ClosedCountPipe implements PipeTransform {
    transform(bugs : Bug[]) : number{
        return bugs.reduce(
          (closedCount, bug) => (bug.isClosed ? closedCount + 1 : closedCount),
          0
        );
    }
}