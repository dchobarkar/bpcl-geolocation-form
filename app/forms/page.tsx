import { Suspense } from "react";

import FormList from "../ui/formList";

export default function LandingPage() {
  return (
    <section className="w-full max-w-3xl p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-4 text-blue-600">
        Select The Form
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Suspense>
          <FormList />
        </Suspense>
      </div>
    </section>
  );
}
