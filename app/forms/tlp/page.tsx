"use client";
import { useState } from "react";

export default function TlpFormPage() {
  const [formData, setFormData] = useState({
    employeeName: "",
    geolocation: "",
    images: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">TLP Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Employee Name
          </label>
          <input
            type="text"
            value={formData.employeeName}
            onChange={(e) =>
              setFormData({ ...formData, employeeName: e.target.value })
            }
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Geolocation
          </label>
          <input
            type="text"
            value={formData.geolocation}
            onChange={(e) =>
              setFormData({ ...formData, geolocation: e.target.value })
            }
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Upload Images
          </label>
          <input
            type="file"
            multiple
            onChange={(e) =>
              setFormData({ ...formData, images: e.target.files })
            }
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
