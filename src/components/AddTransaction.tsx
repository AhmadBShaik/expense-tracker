import React, { useState } from "react";
import { v4 } from "uuid";
import { useTransactions } from "../context";

export const AddTransaction = () => {
  const [note, setNote] = useState<string>("");
  const [amount, setAmount] = useState<number | string>("");
  const [error, setError] = useState<string>("");

  const { transactionsDispatch } = useTransactions();
  return (
    <div className="my-5">
      <div className="text-sm uppercase font-semibold leading-tight">
        Add Transaction
      </div>
      <div className="mt-2 mb-5 border-t-2" />
      {!!error && <div className="text-red-500 text-center">{error}</div>}
      <form>
        <div className="form-control">
          <label htmlFor="note" className="text-sm">
            Note
          </label>
          <input
            value={note}
            onChange={(e) => {
              setError("");
              setNote(e.target.value);
            }}
            type="text"
            className="w-full outline-none py-1.5 px-2"
            placeholder="Enter Note"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount" className="text-sm">
            Amount &nbsp;
            <span className="text-xs">
              (negative - expense, positive - income)
            </span>
          </label>
          <input
            value={amount}
            onChange={(e) => {
              setError("");
              setAmount(parseFloat(e.target.value));
            }}
            type="number"
            className="w-full outline-none py-1.5 px-2"
            placeholder="Enter Income/Expense"
          />
        </div>
        <button
          className="bg-blue-500 text-white font-bold text-sm py-1.5 my-3 w-full uppercase rounded"
          onClick={(e) => {
            e.preventDefault();
            if (!!note && !!amount) {
              transactionsDispatch({
                type: "ADD_TRANSACTION",
                payload: {
                  transaction: { id: v4(), note, amount: amount as number },
                },
              });
              setNote("");
              setAmount("");
            } else {
              setError("Invalid Input");
            }
          }}
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};
