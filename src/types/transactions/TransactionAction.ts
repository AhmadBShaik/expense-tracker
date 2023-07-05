import { Transaction } from ".";

export type TransactionAction =
  | { type: "DELETE_TRANSACTION"; payload: { id: string } }
  | {
      type: "ADD_TRANSACTION";
      payload: {
        transaction: Transaction;
      };
    };
