import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Boards } from './dashboard';

export class BoardsData implements InMemoryDbService {

    createDb() {
        const boards: Boards[] = [
            {
                "boardName": "board1",
                "boardLists": [{
                    "listName": "list1",
                    "tasks": [{
                        "taskName": "task1",
                        "taskActive": true
                    }]
                }]
            }];
        return { boards };
    }
}
