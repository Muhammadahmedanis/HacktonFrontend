import React, { useState } from 'react';
import DepartmentCard from '../components/DepartmentCard.jsx';
import VerificationForm from '../components/VerificationForm.jsx';

const departments = [
  { id: 1, name: 'Human Resources', color: 'bg-blue-500' },
  { id: 2, name: 'Finance', color: 'bg-green-500' },
  { id: 3, name: 'IT', color: 'bg-yellow-500' },
  { id: 4, name: 'Marketing', color: 'bg-purple-500' },
];

function Department() {
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const handleCardClick = (id) => {
    setSelectedDepartment(id);
  };

  const handleCloseForm = () => {
    setSelectedDepartment(null);
  };

  return (
    <div className="min-h-screen bg-green-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-12">Department Access</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept) => (
            <DepartmentCard
              key={dept.id}
              name={dept.name}
              color={dept.color}
              onClick={() => handleCardClick(dept.id)}
            />
          ))}
        </div>
        {selectedDepartment !== null && (
          <VerificationForm
            departmentName={departments.find((d) => d.id === selectedDepartment)?.name || ''}
            onClose={handleCloseForm}
          />
        )}
      </div>
    </div>
  );
}

export default Department;