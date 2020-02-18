  
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Boards } from './dashboard'

export const ADD_BOARD = '[BOARD] Add'
//export const REMOVE_TUTORIAL    = '[TUTORIAL] Remove'

export class AddBoard implements Action {
    readonly type = ADD_BOARD

    constructor(public payload: Boards) {}
}

// export class RemoveTutorial implements Action {
//     readonly type = REMOVE_TUTORIAL

//     constructor(public payload: number) {}
// }

//export type Actions = AddTutorial | RemoveTutorial

export type Actions = AddBoard