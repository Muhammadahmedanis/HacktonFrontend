import React, { useState, useEffect } from "react";
import { Search, User, CheckCircle, Calendar, Phone, MapPin, FileText, AlertCircle } from "lucide-react";
import axios from "axios";
import moment from "moment";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Department = () => {
  const [tokenId, setTokenId] = useState("");
  const [beneficiaryData, setBeneficiaryData] = useState({
    userName: "",
    cnic: "",
    phoneNumber: "",
    address: "",
    purpose: "",
    status: "",
    visit: " ",
    lastVisit: " "
  });

  useEffect(() => {
    localStorage.getItem("data") && setBeneficiaryData(JSON.parse(localStorage?.getItem("data")));
  }, [])

  const handleScanToken = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`/api/v1/user/${tokenId}`);
      console.log(response.data);
      localStorage.setItem("data", JSON.stringify(response.data.user));
      console.log(response.data.user);
      setBeneficiaryData(response.data.user);
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.response?.data.message);
    }
    setTokenId("");
  };
  const handleUpdateStatus = (e) => {
    let status = e.target.innerText
    Swal.fire({
      title: "Are you sure?",
      text: "You want update the status.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, update it!",
      cancelButtonText: "Cancel",
      customClass: {
        confirmButton: 'bg-green-500 text-white hover:bg-green-600 focus:ring-2 focus:ring-green-400 font-semibold',
        cancelButton: 'bg-red-500 text-white hover:bg-red-600 focus:ring-2 focus:ring-red-400 font-semibold'
      }
    }).then(async (result) => { 
      if (result.isConfirmed) {
        let tokenId = beneficiaryData.tokenId;
        try {
          const response = await axios.patch("/api/v1/user/updateStatus", { tokenId, status });
          setBeneficiaryData({ ...beneficiaryData, status: response.data.message.status });
          toast.success(response.data.message);
          localStorage.removeItem("data"); 
          setBeneficiaryData({userName: "",cnic: "",phoneNumber: "",address: "",purpose: "",status: "",visit: "",lastVisit: ""});
        } catch (error) {
          toast.error(error.response?.data.message || "Something went wrong");
        }
      }
    });
  };
  
  // Filter out unwanted fields like 'tokenId', '__v', and '_id'
  const filteredData = Object.entries(beneficiaryData).filter(
    ([key]) => !['tokenId', '__v', '_id', 'updatedAt', 'createdAt'].includes(key)
  );

  return (
    <div className="bg-white shadow-lg rounded-2xl p-8 max-w-4xl mx-auto mt-20 mb-4 min-h-[357px]">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 flex items-center">
        <Search size={36} className="text-blue-500 mr-3" />
        Department Management
      </h1>

      {/* Form for Scanning Token */}
      <form onSubmit={handleScanToken} className="my-4">
        <div className="flex">
          <input
            type="text"
            value={tokenId}
            onChange={(e) => setTokenId(e.target.value)}
            placeholder="Enter Token ID"
            className="flex-grow p-3 border-2 border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-r-lg hover:bg-blue-600 transition duration-300 font-semibold">
            Scan Token
          </button>
        </div>
      </form>
      
      {/* Display Beneficiary Data */}
      {beneficiaryData && (
        <div className="bg-gray-100 p-8 rounded-xl shadow-inner">
          <h2 className="text-3xl font-semibold mb-6 flex items-center text-gray-800">
            <User size={32} className="text-blue-500 mr-3" />
            Beneficiary Information
          </h2>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredData.map(([key, value]) => {
              const labels = {
                userName: "Name",
                cnic: "CNIC",
                phoneNumber: "Phone",
                address: "Address",
                purpose: "Purpose",
                status: "Status",
                visit: "Date",
                lastVisit: "Last Visit"
              };

              const icons = {
                userName: User,
                cnic: FileText,
                phoneNumber: Phone,
                address: MapPin,
                purpose: AlertCircle,
                status: CheckCircle,
                visit: Calendar,
                lastVisit: Calendar
              };

              return (
                <InfoCard
                  key={key}
                  label={labels[key] || key}
                  value={key === "lastVisit"  || key === "visit"
                    ? Array.isArray(value) 
                      ? value.map((val) => formatDate(val))  // Apply formatDate to each item if it's an array
                      : formatDate(value)  // Apply formatDate to the single value if it's not an array
                    : value} 
                  icon={icons[key] || User}/>
              );
            })}
          </div>

          {/* Update Status Section */}
          { localStorage.getItem("data") && <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Update Status</h3>
            <div className="space-x-4">
              <button onClick={handleUpdateStatus}
                className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300 font-semibold">
                Completed
              </button>
              <button onClick={handleUpdateStatus}
                className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition duration-300 font-semibold">
                Rejected
              </button>
            </div>
          </div>}
        </div>
      )}
    </div>
  );
};

const InfoCard = ({ label, value, icon: Icon }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm">
    <div className="flex items-center mb-2">
      {Icon && <Icon size={20} className="text-blue-500 mr-2" />}
      <span className="font-medium text-gray-600">{label}:</span>
    </div>
    {
      Array.isArray(value) ? (
        <select className="w-full border-gray-300 rounded-lg p-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none">
          {
            value.map((item, ind) => (
            <option key={ind} value={item}>
               {label === "Purpose" || label === "Status" ? item : formatDate(item)}
            </option>
            ))
          }
        </select>
      ) : (<p className="text-gray-800 text-lg">{value}</p>)
    }
  </div>
);

const formatDate = (dateString) => {
  const formattedDate = dateString && moment(dateString)?.format("DD MMM YYYY");
  return formattedDate;
};

export default Department;