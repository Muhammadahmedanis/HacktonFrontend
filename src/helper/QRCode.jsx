import React from "react";
import { jsPDF } from "jspdf";

function QRCode({ data, setShow, setFormData }) {
  // Format data into a structured string
  const formattedData = JSON.stringify(
    {
      Name: data.userName,
      CNIC: data.cnic,
      Phone: data.phoneNumber,
      Address: data.address,
      Purpose: data.purpose,
    },
    null,
    2
  );

  // Generate QR code URL
  const qrUrl = `https://quickchart.io/qr?text=${encodeURIComponent(
    formattedData
  )}&size=250&margin=10&dark=2C3E50&light=ECF0F1&ecLevel=H`;

  // Function to download the QR code as a PDF
  const downloadQRCodeAsPDF = async () => {
    const pdf = new jsPDF();
    
    // Add a title to the PDF
    pdf.setFontSize(16);
    pdf.text("Beneficiary QR Code", 20, 20);

    // Load the QR image and add it to the PDF
    const qrImage = new Image();
    qrImage.src = qrUrl;
    
    qrImage.onload = () => {
      pdf.addImage(qrImage, "PNG", 50, 30, 100, 100);
      pdf.save("QRCode.pdf");
    };
    setShow(false);
    setFormData({ cnic: "", userName: "", phoneNumber: "", address: "", purpose: "" });
  };

  return (
    <div className="flex flex-col items-center bg-white py-3 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Your QR Code</h2>
      <img className="w-52 h-44 border rounded-lg shadow-md" src={qrUrl} alt="QR Code" />
      <button
        onClick={downloadQRCodeAsPDF}
        className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition"
      >
        Download as PDF
      </button>
    </div>
  );
}

export default QRCode;
