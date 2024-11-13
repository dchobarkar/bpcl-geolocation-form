"use client";

import { useSearchParams } from "next/navigation";

import Link from "next/link";
import { formLinks } from "../lib/constant-data";

const FormList = () => {
  const searchParams = useSearchParams();
  const officerName = searchParams.get("officer");

  return (
    <>
      {formLinks.map((form, index) => (
        <Link
          key={index}
          href={{
            pathname: `/forms/${form.path}`,
            query: { officer: officerName },
          }}
        >
          <div className="flex items-center justify-center p-4 bg-blue-100 text-blue-700 font-medium rounded-lg shadow hover:bg-blue-200 transition-colors duration-200 cursor-pointer">
            {form.name}
          </div>
        </Link>
      ))}
    </>
  );
};

export default FormList;
