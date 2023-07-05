import React from "react";

export const Header = () => {
  return (
    <header className="text-center p-5 text-2xl font-bold">
      <span className="underline decoration-red-500">Expense</span>{" "}
      <span className="underline decoration-green-500">Tracker</span>
    </header>
  );
};
