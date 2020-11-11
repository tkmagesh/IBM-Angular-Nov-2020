import { Component } from "@angular/core";
import { Bug } from './models/Bug'

@Component({
    selector : 'app-bug-tracker',
    templateUrl: './bugTracker.component.html'
})
export class BugTrackerComponent{
    private newBugId : number = 0;
    bugList : Bug[] = [];

    onAddNewClick(newBugName : string){
        const newBug : Bug = {
            id : ++this.newBugId,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        };

        this.bugList.push(newBug);
    }
}