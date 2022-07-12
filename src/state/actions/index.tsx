import { ActionType } from '../actionType';

interface DepositWithdrawAction {
  type: ActionType.DEPOSIT | ActionType.WITHDRAW;
  payload: number;
}

interface BankruptAction {
  type: ActionType.BANKRUPT;
}

export type Action = DepositWithdrawAction | BankruptAction;
