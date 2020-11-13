import { Component, OnInit } from "@angular/core";
import { Bug } from './models/Bug'
import { BugOperationsService } from './services/bugOperations.service';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-bug-tracker',
  templateUrl: './bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit {
  bugList: Bug[] = [];

  sortAttrName: string = '';
  sortByDesc: boolean = false;

  constructor(private bugOperations: BugOperationsService, 
    private http : HttpClient ) {}

  ngOnInit() {
    window['http'] = this.http;
    this.bugList = this.bugOperations.getAll();
  }

  onNewBugCreated(newBug : Bug){
    //immutable
    //this.bugList = [...this.bugList, newBug];

    //mutable
    this.bugList.push(newBug);
  }

  onBugNameClick(bugToToggle: Bug) {
    const toggledBug = this.bugOperations.toggle(bugToToggle);
    this.bugList = this.bugList.map(bug =>
      bug === bugToToggle ? toggledBug : bug
    );
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