"use client";

import { useState } from "react";

export default function Home() {
  const [employeeName, setEmployeeName] = useState("");
  const [images, setImages] = useState([]);
  const [geolocation, setGeolocation] = useState("");

  const handleImageChange = (event: {
    target: { files: Iterable<never> | ArrayLike<never> };
  }) => {
    setImages(Array.from(event.target.files)); // Update to properly handle file inputs
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const location = `${position.coords.latitude},${position.coords.longitude}`;
        setGeolocation(location);

        // Create form data
        const formData = new FormData();
        formData.append("employeeName", employeeName);
        formData.append("geolocation", location);
        images.forEach((image) => formData.append("images", image));

        // Send data to API
        const res = await fetch("/api/submit", {
          method: "POST",
          body: formData,
        });

        if (res.ok) {
          alert("Form submitted successfully");
        } else {
          alert("Failed to submit form");
        }
      });
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">GeoForm Tracker</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Employee Name
          </label>

          <select
            required
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            <option value="" className="text-gray-500">
              Select Employee
            </option>

            <option value="Employee 1" className="text-gray-900">
              Employee 1
            </option>

            <option value="Employee 2" className="text-gray-900">
              Employee 2
            </option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Upload Images
          </label>

          <div className="relative mt-1">
            <input
              id="file-upload"
              className="sr-only"
              type="file"
              multiple
              onChange={handleImageChange}
              required
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Choose Images
            </label>

            <div className="inline-flex items-center ml-3">
              {images.length > 0 ? (
                <span className="text-gray-700 text-sm">
                  {images.length} file(s) selected
                </span>
              ) : (
                <span className="text-gray-500 text-sm">No files selected</span>
              )}
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
