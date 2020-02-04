export class Boards {
    boardName: string;
    boardLists: BoardLists[];
}


export class BoardLists {
    listName: string;
    tasks: ListTasks[];
}

export class ListTasks {
    taskName: string;
    taskActive: boolean;
}