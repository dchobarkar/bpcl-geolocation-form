import Link from "next/link";

import Header from "./ui/header";
import { formLinks } from "./lib/constant-data";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      <Header title="BPCL Geolocation Form" />

      <section className="w-full max-w-3xl mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-center mb-4 text-blue-600">
          Select The Form
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {formLinks.map((form, index) => (
            <Link href={`/forms/${form.path}`} key={index}>
              <div className="flex items-center justify-center p-4 bg-blue-100 text-blue-700 font-medium rounded-lg shadow hover:bg-blue-200 transition-colors duration-200 cursor-pointer">
                {form.name}
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
