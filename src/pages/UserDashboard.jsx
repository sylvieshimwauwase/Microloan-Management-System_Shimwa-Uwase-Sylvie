import React, { useState } from "react";

const UserDashboard = () => {
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  const [loanRequest, setLoanRequest] = useState(0);
  const [message, setMessage] = useState("");

  const handleIncomeChange = (e) => {
    setMonthlyIncome(Number(e.target.value));
    setMessage(""); 
  };

  const handleLoanRequestChange = (e) => {
    setLoanRequest(Number(e.target.value));
    setMessage("");     
  };

  const handleLoanRequest = (e) => {
    e.preventDefault();
    const maxLoanAllowed = monthlyIncome / 3;

    if (loanRequest <= maxLoanAllowed) {
      setMessage(`Loan approved for $${loanRequest.toFixed(2)}.`);
    } else {
      setMessage(
        `Loan denied. Maximum loan allowed is $${maxLoanAllowed.toFixed(2)}.`
      );
    }
  };

  const maxLoanAllowed = monthlyIncome / 3;

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md mt-16">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        User Dashboard
      </h2>

      <div className="mb-6">
        <label
          htmlFor="monthlyIncome"
          className="block text-sm font-medium text-gray-700"
        >
          Monthly Income ($):
        </label>
        <input
          type="number"
          id="monthlyIncome"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          placeholder="Enter your monthly income"
          value={monthlyIncome}
          onChange={handleIncomeChange}
        />
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-medium text-gray-800">
          Maximum Loan Allowed:{" "}
          <span className="text-[#4175B7] font-bold">
            ${maxLoanAllowed.toFixed(2)}
          </span>
        </h3>
      </div>

      <form onSubmit={handleLoanRequest} className="space-y-4">
        <div>
          <label
            htmlFor="loanRequest"
            className="block text-sm font-medium text-gray-700"
          >
            Loan Request ($):
          </label>
          <input
            type="number"
            id="loanRequest"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
            placeholder="Enter loan amount"
            value={loanRequest}
            onChange={handleLoanRequestChange}
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full py-2 bg-[#4175B7] text-white rounded-md hover:bg-blue-500"
          >
            Request Loan
          </button>
        </div>
      </form>

      {message && (
        <div
          className={`mt-4 text-center text-sm font-medium ${
            loanRequest <= maxLoanAllowed ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
