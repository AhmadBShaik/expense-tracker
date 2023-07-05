import { useTransactions } from "../context";

export const Balance = () => {
  const {
    transactionsState: { transactions },
  } = useTransactions();
  const balance = transactions.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );
  return (
    <div className="text-xl my-5">
      <div className="text-sm uppercase font-semibold leading-tight">
        Your Balance
      </div>
      <div className="font-bold mt-0 pb-0 leading-tight">
        {balance < 0 ? "-" : ""}₹{Math.abs(balance)}
      </div>
    </div>
  );
};
