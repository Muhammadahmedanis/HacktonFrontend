import React from "react";
import { Sidebar } from "./Sider.jsx";
import { BeneficiaryCard } from "./BeneficiaryCard.jsx";
import { ActionButtons } from "./ActionButton.jsx";
import { BarChart3 } from "lucide-react"

export function Dashboard() {
  return (
    <div className="h-screen bg-white">
    <div className="grid lg:grid-cols-[240px_1fr] h-full">
      {/* Sidebar */}
      <Sidebar />
  
      {/* Main Content */}
      <main className="p-6 h-full">
        <div className="space-y-8 h-full">
          <BeneficiaryCard title="All Time Beneficiary" regions={["Total", "Cambodia", "India"]} />
          <BeneficiaryCard title="Current Month Beneficiary" icon={BarChart3} regions={["Total", "Cambodia", "India"]} />
          <ActionButtons />
        </div>
      </main>
    </div>
  </div>
  
  );
}