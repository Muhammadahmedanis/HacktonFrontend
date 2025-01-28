import React from "react";

const Card = ({ children, className }) => {
  return <div className={`bg-white rounded-lg shadow-md p-4 ${className} overflow-x-auto`}>{children}</div>;
};

const CardHeader = ({ children }) => {
  return <div className="mb-4 border-b pb-2">{children}</div>;
};

const CardTitle = ({ children }) => {
  return <h2 className="text-xl font-semibold text-gray-800">{children}</h2>;
};

const CardContent = ({ children }) => {
  return <div>{children}</div>;
};

const Table = ({ children }) => {
  return <table className="min-w-full table-auto">{children}</table>;
};

const TableHeader = ({ children }) => {
  return <thead className="bg-gray-200 rounded-sm">{children}</thead>;
};

const TableRow = ({ children }) => {
  return <tr className="border-b-2">{children}</tr>;
};

const TableHead = ({ children }) => {
  return <th className="px-4 py-2 text-left text-center text-gray-600">{children}</th>;
};

const TableBody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

const TableCell = ({ children, className }) => {
  return <td className={`px-4 py-2 text-center ${className}`}>{children}</td>;
};


const DepartmentActivity = ({ departmentData }) => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Department Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Department</TableHead>
              <TableHead>Today's Count</TableHead>
              <TableHead>Beneficiaries Served</TableHead>
              <TableHead>Beneficiaries Rejected</TableHead>
              <TableHead>Budget Allocated</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {departmentData.map((dept) => (
              <TableRow key={dept.purpose}>
                <TableCell className="font-medium">{dept.purpose}</TableCell>
                <TableCell>{dept.count}</TableCell>
                <TableCell>{dept.completedCount || 0}</TableCell>
                <TableCell>{dept.rejectedCount || 0}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DepartmentActivity;
