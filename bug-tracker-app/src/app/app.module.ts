import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bugTracker/bugTracker.component'

import { BugOperationsService } from './bugTracker/services/bugOperations.service';
import { BugStorageService } from './bugTracker/services/bugStorage.service';

import { TrimTextPipe } from './bugTracker/pipes/trimText.pipe';
import { SortPipe } from './bugTracker/pipes/sort.pipe';
import { ElapsedPipe } from './bugTracker/pipes/elapsed.pipe'
import { ClosedCountPipe } from './bugTracker/pipes/closedCount.pipe';

import { BugStatsComponent } from './bugTracker/components/bugStats.component';
import { BugEditComponent } from './bugTracker/components/bugEdit.component';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    ClosedCountPipe,
    TrimTextPipe,
    SortPipe,
    ElapsedPipe,
    BugStatsComponent,
    BugEditComponent,
  ],
  imports: [BrowserModule],
  providers: [BugOperationsService, BugStorageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
