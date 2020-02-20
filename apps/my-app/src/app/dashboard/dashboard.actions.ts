  
import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Boards } from './dashboard'

export const ADD_BOARD = '[BOARD] Add'

export class AddBoard implements Action {
    readonly type = ADD_BOARD

    constructor(public payload: Boards) {}
}

export type Actions = AddBoard