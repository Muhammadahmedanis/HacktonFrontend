import axios from "axios"; 
import React, { useState, useEffect } from "react";
import DepartmentActivity from "../components/Table";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell,} from "recharts";
import { Activity, Users, UserPlus,UserCheck, DollarSign, Briefcase, PieChartIcon } from "lucide-react";

const AdminDashboard = () => {
  const[totalBeneficer, setTotalBeneficier] = useState(null);
  const[totalNewUsers, setTotalNewUsers] = useState(null);
  const[totalRetueningUsers, setTotalReturningUsers] = useState(null);
  const [departmentStats,  setDepartmentStats] = useState([]);
  const[departmentData, setDepartmentData] = useState([])

  const dailyStats = [
    { title: "Total Visitors", value: totalBeneficer, icon: Users, color: "blue" },
    { title: "New Beneficiaries", value: totalNewUsers, icon: UserPlus, color: "green" },
    { title: "Returning Beneficiaries", value: totalRetueningUsers, icon: UserCheck, color: "purple" },
    { title: "Total Assistance Provided", value: "$12,500", icon: DollarSign, color: "yellow" },
  ];
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("/api/v1/user/beneficiariesByPurpose");
        const response2 = await axios.get("/api/v1/user/getNewUsers");

        setTotalBeneficier(response.data?.data?.totalCount);
        setTotalNewUsers(response2.data?.visitUsersData.usersFirstVisits.length);
        setTotalReturningUsers(response2.data?.visitUsersData.usersWithMultipleVisits.length);
        
        setDepartmentData(response.data?.data?.groupedByPurpose)
        
        if (response.data?.data?.groupedByPurpose?.length) {
          const colors = ["#3B82F6", "#10B981", "#8B5CF6", "#F59E0B", "#EF4444"]; // Example colors
          const stats = response.data?.data?.groupedByPurpose.map((item, index) => ({
            name: item.purpose,
            count: item.count,
            color: colors[index % colors.length], // Cycle through colors
          }));
          setDepartmentStats(stats);
        };

      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [])

  return (
    <div className="bg-gray-100 p-6 rounded-xl">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 flex items-center">
        <Activity size={32} className="text-blue-500 mr-2" />
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {dailyStats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Briefcase className="text-blue-500 mr-2" />
            Department Activity
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={departmentStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <PieChartIcon className="text-blue-500 mr-2" />
            Assistance Distribution
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={departmentStats}
                dataKey="count"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {departmentStats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <DepartmentActivity departmentData={departmentData} />
    </div>
  );
};

const StatCard = ({ icon: Icon, title, value, color }) => (
  <div className={`bg-white p-6 rounded-xl shadow-md border-l-4 border-${color}-500`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
        <p className={`text-2xl font-bold text-${color}-600`}>{value}</p>
      </div>
      <Icon size={32} className={`text-${color}-500`} />
    </div>
  </div>
);

export default AdminDashboard;