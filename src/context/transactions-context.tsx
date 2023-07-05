import React, { createContext, useContext, useReducer } from "react";
import { transactionReducer } from "../reducers";
import { TransactionsDispatch, TransactionsState } from "../types/transactions";

const defaultTransactionsState: TransactionsState = {
  transactions: [
    // { id: "11443489-afcc-4d8f-9fb7-ef8933691c70", note: "Cash", amount: 30 },
    // { id: "f2f767f0-8a7b-4641-9cd0-41ba166243e1", note: "Food", amount: -10 },
    // { id: "0c60a522-a8b6-45fe-819b-6230932eeccf", note: "Cash", amount: 15 },
  ],
};

export const TransactionsContext = createContext<
  | {
      transactionsState: TransactionsState;
      transactionsDispatch: TransactionsDispatch;
    }
  | undefined
>(undefined);

export const TransactionsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [transactionsState, transactionsDispatch] = useReducer(
    transactionReducer,
    defaultTransactionsState
  );

  return (
    <TransactionsContext.Provider
      value={{ transactionsState, transactionsDispatch }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};

export const useTransactions = () => {
  const context = useContext(TransactionsContext);
  if (!context) {
    throw new Error(
      "useTransactions must be used inside a TransactionsProvider"
    );
  }

  return context;
};
