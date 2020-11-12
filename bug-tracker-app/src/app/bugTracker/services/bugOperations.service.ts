import { Bug } from "../models/Bug";

export class BugOperationsService {
    
    private newBugId: number = 0;
    
    createNew(newBugName: string): Bug {
        const newBug: Bug = {
          id: ++this.newBugId,
          name: newBugName,
          isClosed: false,
          createdAt: new Date()
        };
        return newBug;
    }

    toggle(bugToToggle : Bug) : Bug {
        //bugToToggle.isClosed = !bugToToggle.isClosed;
        const toggledBug = {...bugToToggle, isClosed: !bugToToggle.isClosed };
        return toggledBug;
    }
}