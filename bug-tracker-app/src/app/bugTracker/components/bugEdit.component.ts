import { Component, Output, EventEmitter } from '@angular/core';
import { BugOperationsService } from '../services/bugOperations.service';
import { Bug } from '../models/Bug';

@Component({
  selector: 'app-bug-edit',
  template: `
    <section class="edit">
      <label for="">Bug Name :</label>
      <input type="text" (input)="newBugName = $event.target.value" />
      <span> [ {{ newBugName.length }} ] </span>
      <input type="button" value="Add New" (click)="onAddNewClick()" />
    </section>
  `
})
export class BugEditComponent {

  newBugName: string = '';

  @Output()
  public bugCreated : EventEmitter<Bug> = new EventEmitter<Bug>();

  constructor(private bugOperations : BugOperationsService){
      
  }
  
  onAddNewClick() {
    this.bugOperations
      .createNew(this.newBugName)
      .subscribe(newBug => this.bugCreated.emit(newBug));
  }
}