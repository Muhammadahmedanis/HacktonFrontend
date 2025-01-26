import { FaUsers, FaBriefcase, FaFileAlt, FaUser } from 'react-icons/fa'; // Importing from React Icons
import ServiceCard from './ServiceCard.jsx';

const Services = () => {
  const services = [
    {
      title: "Beneficiary Management",
      description: "Efficiently manage and track all your beneficiaries in one place.",
      icon: <FaUser size={48} />,
    },
    {
      title: "Department Coordination",
      description: "Streamline communication and tasks across different departments.",
      icon: <FaBriefcase size={48} />,
    },
    {
      title: "User-Friendly Forms",
      description: "Easy-to-use forms for quick data entry and updates.",
      icon: <FaFileAlt size={48} />,
    },
  ];

  return (
    <section className="py-12 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;