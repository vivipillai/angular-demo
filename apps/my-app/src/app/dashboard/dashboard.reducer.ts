  
import { Action } from '@ngrx/store'
import { Boards } from './dashboard'
import * as BoardActions from './dashboard.actions'

const initialState: Boards = {
    "boardName": "board1",
    "boardLists": [{
        "listName": "list1",
        "tasks": [{
            "taskName": "task1",
            "taskActive": true
        }]
    }]
}

export function reducer(state: Boards[] = [initialState], action: BoardActions.Actions) {
    switch(action.type) {
        case BoardActions.ADD_BOARD:
            return [...state, action.payload];
            
        default:
            return state;
    }
}