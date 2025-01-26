import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "./components/Dashboard.jsx";
import BeneficiariesPage from "./routes/Benificiary.jsx";
import Home from "./routes/Home.jsx"
import Form from "./components/Form.jsx";
import Department from "./routes/Department.jsx";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/beneficiaries" element={<BeneficiariesPage />} />
        <Route path="/form" element={<Form />} />
        <Route path="/department" element={ <Department/> } />
      </Routes>
    </Router>
  );
}
