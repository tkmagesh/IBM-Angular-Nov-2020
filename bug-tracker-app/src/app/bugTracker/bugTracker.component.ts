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

    onBugNameClick(bugToToggle){
        bugToToggle.isClosed = !bugToToggle.isClosed;
    }

    onRemoveClick(bugToRemove){
        this.bugList.splice(this.bugList.indexOf(bugToRemove), 1);
    }

    onRemoveClosedClick(){
        this.bugList = this.bugList.filter(bug => !bug.isClosed);
    }

    getClosedCount(){
        return this.bugList.reduce((closedCount, bug) => bug.isClosed ? closedCount + 1 : closedCount, 0);
    }
}