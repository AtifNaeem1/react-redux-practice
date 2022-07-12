//functions that dispatch actions
// in our example, we have to dispatch three actions, deposit, withdraw and bankrupt

import { ActionType } from "../actionType";
import { Dispatch } from "redux";
import { Action } from "../actions";

export const depositMoney = (amount:number) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type: ActionType.DEPOSIT,
            payload: amount
        })
    }
}

export const withdrawMoney = (amount:number) => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type: ActionType.WITHDRAW,
            payload: amount
        })
    }
}

export const bankrupt = () => {
    return (dispatch:Dispatch<Action>) => {
        dispatch({
            type: ActionType.BANKRUPT
        })
    }
}