import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
    <header className="bg-green-600 text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Beneficiary App
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/dashboard" className="hover:underline">
              Admin
            </Link>
          </li>
          <li>
            <Link to="/department" className="hover:underline">
              Department
            </Link>
          </li>
          <li>
            <Link to="/form" className="hover:underline">
              User Form
            </Link>
          </li>
        </ul>
      </nav>
    </header>

    <div className="bg-green-500 text-white py-20 px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to the Beneficiary App</h1>
      <p className="text-xl">Manage your beneficiaries with ease</p>
    </div>
    </>
  );
}