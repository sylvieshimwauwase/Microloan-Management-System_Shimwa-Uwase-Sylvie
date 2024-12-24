import React, { useState } from "react";

const AdminDashboard = () => {
  // State to store loan requests
  const [loanRequests, setLoanRequests] = useState([]);

  // Function to handle approval of a loan
  const handleApprove = (id) => {
    setLoanRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: "Approved" } : request
      )
    );
  };

  // Function to handle declining of a loan
  const handleDecline = (id) => {
    setLoanRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.id === id ? { ...request, status: "Declined" } : request
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-md mt-16">
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Admin Dashboard
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                User
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                Amount ($)
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600">
                Status
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-sm font-semibold text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {loanRequests.map((request) => (
              <tr key={request.id} className="border-b">
                <td className="px-6 py-4 text-sm text-gray-700">
                  {request.user}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  ${request.amount}
                </td>
                <td className="px-6 py-4 text-sm text-gray-700">
                  {request.status}
                </td>
                <td className="px-6 py-4 text-center">
                  {request.status === "Pending" && (
                    <div className="space-x-2">
                      <button
                        onClick={() => handleApprove(request.id)}
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleDecline(request.id)}
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                      >
                        Decline
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
