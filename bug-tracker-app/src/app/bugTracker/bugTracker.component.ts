import { Component } from "@angular/core";
import { Bug } from './models/Bug'
import { BugOperationsService } from './services/bugOperations.service';

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bugTracker.component.html'
})
export class BugTrackerComponent {
  bugList: Bug[] = [];

  sortAttrName: string = '';
  sortByDesc: boolean = false;
  
  constructor(private bugOperations: BugOperationsService) {
    this.bugList.push({
      id: 3,
      name: 'Server communication failure',
      isClosed: false,
      createdAt: new Date()
    });
    this.bugList.push({
      id: 4,
      name: 'Data integration checks failed',
      isClosed: true,
      createdAt: new Date()
    });
    this.bugList.push({
      id: 1,
      name: 'User actions not recognised',
      isClosed: false,
      createdAt: new Date()
    });
    this.bugList.push({
      id: 2,
      name: 'Application not responding',
      isClosed: false,
      createdAt: new Date()
    });
  }

  onAddNewClick(newBugName: string) {
    const newBug = this.bugOperations.createNew(newBugName);
    this.bugList.push(newBug);
  }

  onBugNameClick(bugToToggle: Bug) {
    this.bugOperations.toggle(bugToToggle);
  }

  onRemoveClick(bugToRemove) {
    this.bugList.splice(this.bugList.indexOf(bugToRemove), 1);
  }

  onRemoveClosedClick() {
    this.bugList = this.bugList.filter(bug => !bug.isClosed);
  }

  getClosedCount() {
    return this.bugList.reduce(
      (closedCount, bug) => (bug.isClosed ? closedCount + 1 : closedCount),
      0
    );
  }
}