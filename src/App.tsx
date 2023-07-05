import React from "react";
import {
  Header,
  Balance,
  IncomeExpenses,
  TransactionHistory,
  AddTransaction,
} from "./components";

function App() {
  return (
    <div className="max-w-md mx-auto px-2.5">
      <Header />
      <Balance />
      <IncomeExpenses />
      <AddTransaction />
      <TransactionHistory />
    </div>
  );
}

export default App;
