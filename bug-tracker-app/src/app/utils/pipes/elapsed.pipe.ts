import { Pipe, PipeTransform } from "@angular/core";
import * as moment from 'moment';

@Pipe({
    name : 'elapsed',
    pure : true
})
export class ElapsedPipe implements PipeTransform{
    transform(data : string) : string{
        return moment(data).fromNow();
    }
}