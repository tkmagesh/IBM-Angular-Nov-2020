import { Component, OnInit } from "@angular/core";
import { Bug } from './models/Bug'
import { BugOperationsService } from './services/bugOperations.service';

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit {
  bugList: Bug[] = [];
  newBugName :string = '';
  sortAttrName: string = '';
  sortByDesc: boolean = false;

  constructor(private bugOperations: BugOperationsService) {
    
  }

  ngOnInit(){
    this.bugList = this.bugOperations.getAll();
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
    this.bugOperations.remove(bugToRemove);
    this.bugList = this.bugList.filter(bug => bug.id !== bugToRemove.id);
  }

  onRemoveClosedClick() {
     this.bugList
      .filter(bug => bug.isClosed)
      .forEach(closedBug => this.onRemoveClick(closedBug));
  }
}