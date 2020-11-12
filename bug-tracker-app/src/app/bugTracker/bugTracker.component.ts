import { Component } from "@angular/core";
import { Bug } from './models/Bug'
import { BugOperationsService } from './services/bugOperations.service';

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bugTracker.component.html'
})
export class BugTrackerComponent {
  bugList: Bug[] = [];
  newBugName :string = '';
  sortAttrName: string = '';
  sortByDesc: boolean = false;

  constructor(private bugOperations: BugOperationsService) {
    /* this.bugList.push({
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
    }); */
  }

  onAddNewClick() {
    const newBug = this.bugOperations.createNew(this.newBugName);
    //this.bugList.push(newBug);
    this.bugList = [...this.bugList, newBug];
  }

  onBugNameClick(bugToToggle: Bug) {
    const toggledBug = this.bugOperations.toggle(bugToToggle);
    this.bugList = this.bugList.map(bug => bug === bugToToggle ? toggledBug : bug);
  }

  onRemoveClick(bugToRemove) {
    this.bugList.splice(this.bugList.indexOf(bugToRemove), 1);
  }

  onRemoveClosedClick() {
    this.bugList = this.bugList.filter(bug => !bug.isClosed);
  }
}