import { Bug } from "../models/Bug";


export class BugStorageService {
    private storage = window.localStorage;

    private newBugId: number = 0;

    getAll() {
        let bugs : Bug[] = [];
        for(let index = 0, count = this.storage.length; index < count; index++){
            const key = this.storage.key(index),
                rawData = this.storage.getItem(key),
                bug = JSON.parse(rawData);
            bugs.push(bug);
            this.newBugId = this.newBugId > bug.id ? this.newBugId : bug.id;
        }
        return bugs;
    }

    save(bug : Bug) : Bug {
        if (bug.id === 0){
            bug.id = ++this.newBugId;
        }
        this.storage.setItem(`bug-${bug.id}`, JSON.stringify(bug));
        return bug;
    }

    remove(bug) {
        this.storage.removeItem(`bug-${bug.id}`);
    }
}