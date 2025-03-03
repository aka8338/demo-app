import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

function Authentication() {
  const [phone, setPhone] = useState("");

  return (
    <div className="max-w-lg mx-auto mt-24 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
        Create an Account
      </h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            User Name
          </label>
          <input
            type="tex"
            name="UserName"
            placeholder="User Name"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <PhoneInput
            country={"us"} // Default country
            value={phone}
            onChange={setPhone}
            inputProps={{
              name: "phone",
              required: true,
            }}
            containerClass="w-full"
            inputClass="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300"
        >
          Signup
        </button>
        <p className="mt-4 text-center text-sm text-gray-600">
          If you already have an account,{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            login here
          </Link>
          .
        </p>
      </form>
    </div>
  );
}

export default Authentication;
