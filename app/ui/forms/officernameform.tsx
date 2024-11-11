"use client";

import { useState } from "react";
import Link from "next/link";

import { officerName } from "@/app/lib/constant-data";

const OfficerNameForm = () => {
  const [name, setName] = useState("");

  return (
    <>
      <select
        id="officer"
        name="officer"
        value={name}
        defaultValue={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
        required
      >
        <option className="text-gray-500" value="" disabled selected>
          Please Choose
        </option>
        {officerName.map((officer) => (
          <option key={officer.name} value={officer.value}>
            {officer.name}
          </option>
        ))}
      </select>

      <Link
        href={`/forms?officer=${name}`}
        className="w-full flex justify-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        Continue
      </Link>
    </>
  );
};

export default OfficerNameForm;
