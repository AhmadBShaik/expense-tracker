import { TransactionAction, TransactionsState } from "../types/transactions";

export const transactionReducer = (
  state: TransactionsState,
  action: TransactionAction
): TransactionsState => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload.id
        ),
      };
    case "ADD_TRANSACTION":
      return {
        transactions: [action.payload.transaction, ...state.transactions],
      };
    default:
      return state;
  }
};
