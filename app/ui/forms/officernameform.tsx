"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { officerNames } from "@/app/lib/constant-data";

const OfficerNameForm = () => {
  const [selectedOfficer, setSelectedOfficer] = useState("");

  const searchParams = useSearchParams();
  const queryString = searchParams.toString();

  return (
    <>
      <select
        id="officer"
        name="officer"
        value={selectedOfficer}
        onChange={(e) => setSelectedOfficer(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
        required
      >
        <option className="text-gray-500" value="" disabled>
          Please Choose
        </option>
        {officerNames.map((officer) => (
          <option key={officer.name} value={officer.value}>
            {officer.name}
          </option>
        ))}
      </select>

      {selectedOfficer !== "" ? (
        <Link
          href={`/forms?officer=${selectedOfficer}&${queryString}`}
          className="w-full flex justify-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Continue
        </Link>
      ) : (
        <p className="pl-4 text-xs text-red-500">
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span>Please select Officer name to continue</span>
        </p>
      )}
    </>
  );
};

export default OfficerNameForm;
