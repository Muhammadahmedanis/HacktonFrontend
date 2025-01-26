import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    cnic: "",
    phoneNumber: "",
    address: "",
    purpose: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!/^\d{13}$/.test(formData.cnic)) {
      newErrors.cnic = "CNIC must be 13 digits";
      isValid = false;
    }

    if (!/^\d{11}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 11 digits";
      isValid = false;
    }

    if (formData.address.trim() === "") {
      newErrors.address = "Address is required";
      isValid = false;
    }

    if (formData.purpose === "") {
      newErrors.purpose = "Purpose of visit is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await axios.post("/api/v1/user/applicant", formData);
      console.log("Form submitted successfully:", response.data);
      setFormData({
        name: "",
        cnic: "",
        phoneNumber: "",
        address: "",
        purpose: "",
      });
      alert("Registration successful!");
    } catch (error) {
      console.error("Error submitting the form:", error.response?.data || error.message);
      alert("Failed to submit the form. Please try again.");
    }
  };
  return (
    <>

    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg mx-auto">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">Beneficiary Registration</h2>
          <p className="mt-2 text-center text-sm text-gray-600">Please fill in the details below</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="cnic" className="sr-only">
                CNIC
              </label>
              <input
                id="cnic"
                name="cnic"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="CNIC (13 digits)"
                value={formData.cnic}
                onChange={handleChange}
              />
              {errors.cnic && <p className="text-red-500 text-xs italic">{errors.cnic}</p>}
            </div>
            <div>
              <label htmlFor="phoneNumber" className="sr-only">
                Phone Number
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Phone Number (11 digits)"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
              {errors.phoneNumber && <p className="text-red-500 text-xs italic">{errors.phoneNumber}</p>}
            </div>
            <div>
              <label htmlFor="address" className="sr-only">
                Address
              </label>
              <textarea
                id="address"
                name="address"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Address"
                rows={3}
                value={formData.address}
                onChange={handleChange}
              ></textarea>
              {errors.address && <p className="text-red-500 text-xs italic">{errors.address}</p>}
            </div>
            <div>
              <label htmlFor="purpose" className="sr-only">
                Purpose of Visit
              </label>
              <select
                id="purpose"
                name="purpose"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                value={formData.purpose}
                onChange={handleChange}
              >
                <option disabled value="">Select Purpose of Visit</option>
                <option value="financial">Financial Aid</option>
                <option value="education">Education Support</option>
                <option value="food">Food Assistance</option>
                <option value="other">Other</option>
              </select>
              {errors.purpose && <p className="text-red-500 text-xs italic">{errors.purpose}</p>}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
      </div>    
      </>
)}