import { Bug } from '../models/Bug';
import { BugApiService } from './bugApi.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class BugOperationsService{
    constructor(private bugApi : BugApiService){

    }

    getAll() : Observable<Bug[]>{
        return this.bugApi.getAll();
    }
}


//Using the BugStorageService
/* 
import { Bug } from "../models/Bug";
import { BugStorageService } from './bugStorage.service';
import { Injectable } from '@angular/core';

@Injectable()
export class BugOperationsService {

    constructor(private bugStorage: BugStorageService){

    }
    createNew(newBugName: string): Bug {
        const newBug: Bug = {
          id: 0,
          name: newBugName,
          isClosed: false,
          createdAt: new Date()
        };
        return this.bugStorage.save(newBug);
    }

    toggle(bugToToggle : Bug) : Bug {
        //bugToToggle.isClosed = !bugToToggle.isClosed;
        const toggledBug = {...bugToToggle, isClosed: !bugToToggle.isClosed };
        return this.bugStorage.save(toggledBug);
    }

    remove(bugToRemove : Bug) {
        this.bugStorage.remove(bugToRemove);
    }

    getAll() : Bug[]{
        return this.bugStorage.getAll();
    }
} */