import { useTransactions } from "../context";

export const IncomeExpenses = () => {
  const {
    transactionsState: { transactions },
  } = useTransactions();
  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((total, transaction) => total + transaction.amount, 0);
  const totalExpenses = transactions
    .filter((transaction) => transaction.amount < 0)
    .reduce((total, transaction) => total + transaction.amount, 0);

  return (
    <div className="my-3 bg-white shadow-md grid grid-cols-2 gap-2 divide-x p-5">
      <div>
        <div className="text-sm text-center uppercase">Income</div>
        <div className="text-md text-center uppercase font-bold text-green-600">
          ₹{totalIncome}
        </div>
        {/* <div className="font-bold mt-0 pb-0 leading-tight">₹100</div> */}
      </div>
      <div>
        <div className="text-sm text-center uppercase">Expense</div>
        <div className="text-md text-center uppercase font-bold text-red-600">
          ₹{Math.abs(totalExpenses)}
        </div>
      </div>
    </div>
  );
};
