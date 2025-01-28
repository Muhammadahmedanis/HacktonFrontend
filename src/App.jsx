import React from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./routes/Home.jsx"
import Form from "./routes/Form.jsx";
import Department from "./routes/Department.jsx";
import AdminDashboard from "./routes/AdminDshboard.jsx";
import Layout from "./layout.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Layout /> }>
        <Route index element={<Home />} />
        <Route path="/Receptionist" element={ <Form /> } />
        <Route path="/DepartmentStaff" element={ <Department/> } />
        <Route path="/Admin" element={<AdminDashboard />} />
    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
