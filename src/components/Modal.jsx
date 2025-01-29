import React, { useActionState, useState } from 'react'
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate, useOutletContext } from 'react-router-dom';
import { axiosInstance } from '../api/axios';

function Modal() {
    const navigate = useNavigate();
    const { isModalOpen, setIsModalOpen } = useOutletContext(); 

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

  const[user, submitAction, isPending] = useActionState(async (previousState, formData) => {
    const payload = {
      designation: formData.get("designation"),
      userId: formData.get("userId")
    }
    
    try {
      const response = await axiosInstance.post("/api/v1/staff/designation", { designation: payload.designation, userId: payload.userId });
      toast.success(response.data.message);
      setIsModalOpen(false);
      navigate(`/${payload.designation}`);
    } catch (error) {
      toast.error(error.response?.data.message);
      setIsModalOpen(false);
    } 
  })

  return (
    isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div
          className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6"
          onClick={(e) => e.stopPropagation()} // Prevent modal close when clicking inside the modal
        >
      
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">
                Sign in to our platform
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center"
                onClick={toggleModal}
                >✕
              </button>
            </div>
            <div className="p-4 md:p-5">
              <form action={submitAction} className="space-y-4">
                <div>
                  <label
                    htmlFor="designation"
                    className="block mb-2 text-sm font-medium text-gray-900 text-left">Select designation
                  </label>
                  <select id="countries" name="designation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option>Select your designation</option>
                  <option value="Admin" >Admin</option>
                  <option value="Receptionist">Receptionist</option>
                  <option value="DepartmentStaff">DepartmentStaff</option>
                </select>
                </div>
                <div>
                  <label
                    htmlFor="userId"
                    className="block mb-2 text-sm font-medium text-gray-900 text-left">
                    Your userId
                  </label>
                  <input
                    type="number"
                    name="userId"
                    placeholder="901256"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"required/>
                </div>
                <button
                  type="submit"
                  disabled={isPending}
                  className="w-full text-white inline-flex justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"> { isPending ? <div className="w-7 h-7 border-4  border-t-blue-500 border-gray-300 rounded-full animate-spin"></div> : "Countinue" }
                </button>
              </form>
            </div>
          </div>
        </div>
      )
  )
}

export default Modal