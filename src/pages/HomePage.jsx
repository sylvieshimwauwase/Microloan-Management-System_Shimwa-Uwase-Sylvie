import React from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <header className="bg-[#4175B7] text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Microloan Management System
          </h1>
          <p className="text-lg mb-6">
            Shape your future with Microloan Management System by meeting the
            best Organization that offers loan
          </p>
          <button
            onClick={() => navigate("/register")}
            className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200"
          >
            Acess Our Services
          </button>
        </div>
      </header>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-md text-center">
              
              <h3 className="text-xl font-semibold mb-2">Financial Advisors</h3>
              <p className="text-gray-600">
                Get your financial advisors for your business and company for
                free
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-md text-center">
              
              <h3 className="text-xl font-semibold mb-2">
                Manage Your Loan Service
              </h3>
              <p className="text-gray-600">
                Engage in loan management services including putting into action
                what the loan is for
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-md text-center">
              
              <h3 className="text-xl font-semibold mb-2">Easy Monitoring</h3>
              <p className="text-gray-600">
                Monitor your loan usage at any time where ever you are
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#4175B7] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Ready to Join Our Microloan Management System?
          </h2>
          <button
             onClick={() => navigate("/register")}
            className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-200"
          >
            Join Now
          </button>
        </div>
      </section>
    </div>
  );
};
export default HomePage;
