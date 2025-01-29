import React, { useState } from "react";
import { UserPlus } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import QRCode from "../helper/QRCode";

const Form = () => {
  const [formData, setFormData] = useState({
    userName: "",
    phoneNumber: "",
    cnic: "",
    address: "",
    purpose: "",
  });
  
  const [errors, setErrors] = useState({});
  
  const[show, setShow] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errors = {};
    const cnicRegex = /^\d{13}$/; // Format: 1234512345671
    const phoneRegex = /^03\d{9}$/; // Format: 03XXXXXXXXX

    if (!cnicRegex.test(formData.cnic)) {
      errors.cnic = "CNIC must be in the format 1234512345671";
    }

    if (!phoneRegex.test(formData.phoneNumber)) {
      errors.phone = "Phone number must start with 03 and be 11 digits long";
    }

    if (!formData.userName.trim().toLowerCase()) {
      errors.name = "Name is required";
    }

    if (!formData.address.trim()) {
      errors.address = "Address is required";
    }

    if (!formData.purpose) {
      errors.purpose = "Purpose must be selected";
    }

    return errors;
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // console.log("Form submitted:", formData);
    const response = await axios.post("/api/v1/user/applicant", formData);
    try {
      console.log(response.data);
      toast.success(response.data.message);
      setShow(true)
      // Reset form fields
    } catch (error) {
      toast.error(error.response?.data.message);      
      setFormData({ cnic: "", userName: "", phoneNumber: "", address: "", purpose: "" });
    }
    
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 my-10 max-w-lg mx-auto mt-24">
      {/* Header */}
      <div className="flex items-center justify-center mb-6">
        <UserPlus size={32} className="text-blue-500 mr-2" />
        <h1 className="text-3xl font-bold text-gray-800">
          Beneficiary Registration
        </h1>
      </div>
      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4 pb-6">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key}>
            <label
              htmlFor={key}
              className="block mb-1 font-medium text-gray-700 capitalize"
            >
              {key}
            </label>
            {key === "purpose" ? (
              <select
                id={key}
                name={key}
                value={value}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select purpose</option>
                <option value="Financial Aid">Financial Aid</option>
                <option value="Medical Assistance">Medical Assistance</option>
                <option value="Education Support">Education Support</option>
              </select>
            ) : (
              <input
                type={key === "phone" ? "tel" : "text"}
                id={key}
                name={key}
                value={value}
                onChange={handleChange}
                className={`w-full p-2 border ${
                  errors[key] ? "border-red-500" : "border-gray-300"
                } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                required
              />
            )}
            {errors[key] && (
              <p className="text-red-500 text-sm mt-1">{errors[key]}</p>
            )}
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
        >
          Register and Generate Token
        </button>
      </form>
      {show && <QRCode data={formData} setShow={setShow} setFormData={setFormData} /> }
    </div>
  );
};

export default Form;
