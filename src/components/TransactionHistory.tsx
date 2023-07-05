import React from "react";
import { useTransactions } from "../context";

export const TransactionHistory = () => {
  const {
    transactionsState: { transactions },
    transactionsDispatch,
  } = useTransactions();

  return (
    <div className="my-5">
      <div className="text-sm uppercase font-semibold leading-tight">
        History
      </div>
      <div className="mt-2 mb-5 border-t-2" />
      {!!transactions.length ? (
        <ul>
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className={`flex bg-white my-2 shadow-md text-sm justify-between p-2.5 border-l-4 ${
                transaction.amount > 1 ? "border-green-500" : "border-red-500"
              }`}
            >
              <div className="flex items-center">{transaction.note}</div>
              <div className="flex justify-center items-center space-x-1.5">
                <div>
                  {transaction.amount > 1 ? "+" : "-"}₹
                  {Math.abs(transaction.amount)}
                </div>
                <div
                  className="text-xl cursor-pointer text-red-400 hover:text-red-500"
                  onClick={() => {
                    transactionsDispatch({
                      type: "DELETE_TRANSACTION",
                      payload: { id: transaction.id },
                    });
                  }}
                >
                  &#128938;
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center text-gray-500 text-sm">No Transactions</div>
      )}
    </div>
  );
};
