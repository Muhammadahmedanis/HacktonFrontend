import { Link } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { SiSimpleanalytics } from "react-icons/si";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { TbReportAnalytics } from "react-icons/tb";
import Modal from "../components/Modal";

const Home = () => {
  
  // Sample data for the pie chart
  const data = [
    { name: "Financial Aid", value: 400 },
    { name: "Medical Assistance", value: 300 },
    { name: "Education Support", value: 200 },
    { name: "Food Distribution", value: 100 },
  ];

  const data1 = [
    {name: "Efficient & Registration", icon: <TbReportAnalytics size={33} className="text-green-500 mb-3" /> },
    {name: "Department Management", icon: <HiOutlineBuildingOffice size={33} className="text-green-500 mb-3"  />},
    {name: "Comprehensive Analytics", icon: <SiSimpleanalytics size={33} className="text-green-500 mb-3"  />},
  ]

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Hero Section */}
      <section
        className="relative pt-24 py-10 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-background.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
            Empowering Communities Through Efficient Aid Management
          </h1>
          <p className="text-xl sm:text-2xl text-green-100 mb-8">
            Streamline your beneficiary processes and maximize your impact
          </p>
          <button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg">
           Get Started
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
            <div className="border-2 border-gray-300 rounded shadow-lg">
              <div className="p-6 text-center">
                <h3 className="text-4xl font-bold text-green-600 mb-2">10,000+</h3>
                <p className="text-gray-500">Beneficiaries Served</p>
              </div>
            </div>
            <div className="border-2 border-gray-300 rounded shadow-lg">
              <div className="p-6 text-center">
                <h3 className="text-4xl font-bold text-green-600 mb-2">5</h3>
                <p className="text-gray-500">Departments</p>
              </div>
            </div>
            <div className="border-2 border-gray-300 rounded shadow-lg">
              <div className="p-6 text-center">
                <h3 className="text-4xl font-bold text-green-600 mb-2">24/7</h3>
                <p className="text-gray-500">Support Available</p>
              </div>
            </div>
            <div className="border-2 border-gray-300 rounded shadow-lg">
              <div className="p-6 text-center">
                <h3 className="text-4xl font-bold text-green-600 mb-2">98%</h3>
                <p className="text-gray-500">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
       <Modal />
      </div>
      {/* Features Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
              data1.map((feature, index) => (
              <div key={index}>
                <div className="p-6 border-2 border-gray-200 shadow-lg rounded bg-white">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
                  <p className="text-gray-600 mb-4">
                    Streamlined process for {feature.name}.
                  </p>
                </div>
              </div>
              ))
            }
          </div>
        </div>
      </section>

      {/* Chart Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Assistance Distribution</h2>
          <div className="bg-white px-8 rounded-lg shadow-lg">
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
