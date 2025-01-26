import { Sidebar } from "../components/Sider.jsx";
import { RxCross2 } from "react-icons/rx";
import { MdEdit } from "react-icons/md";

export default function BeneficiariesPage() {
    return (
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        
        {/* Main Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Beneficiaries</h2>
              {/* Custom Button */}
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-300 focus:outline-none transition duration-200">
                EXPORT DETAILS
              </button>
            </div>
  
            {/* Search and Filter */}
            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <div className="flex gap-4 items-end">
                <div className="flex-1">
                  <input
                    type="search"
                    placeholder="Search"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="w-48">
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
                {/* Custom Filter and Clear Buttons */}
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none transition duration-200">
                  FILTER
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-100 rounded-lg focus:outline-none transition duration-200">
                  CLEAR FILTER
                </button>
              </div>
            </div>
  
            {/* Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">ID No</th>
                    <th className="px-4 py-2 text-left">First Name</th>
                    <th className="px-4 py-2 text-left">Last Name</th>
                    <th className="px-4 py-2 text-left">Program</th>
                    <th className="px-4 py-2 text-left">Updated</th>
                    <th className="px-4 py-2 text-left">Created</th>
                    <th className="px-4 py-2 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <tr key={i} className="border-t">
                      <td className="px-4 py-2">N100{i + 1}</td>
                      <td className="px-4 py-2">Name</td>
                      <td className="px-4 py-2">Surname</td>
                      <td className="px-4 py-2">N-001</td>
                      <td className="px-4 py-2">01-01-2019</td>
                      <td className="px-4 py-2">01-01-2019</td>
                      <td className="px-4 py-2 text-right">
                        <div className="flex justify-end gap-2">
                          {/* Edit Button */}
                          <button className="p-2 bg-transparent text-gray-500 hover:bg-gray-100 rounded-lg">
                            <MdEdit size={22} />
                          </button>
  
                          {/* Delete Button */}
                          <button className="p-2 bg-transparent text-red-500 hover:bg-red-100 rounded-lg">
                           <RxCross2 />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
  