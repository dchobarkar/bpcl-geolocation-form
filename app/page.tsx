import { Suspense } from "react";

import LocationForm from "./ui/forms/locationform";
import OfficerNameForm from "./ui/forms/officernameform";

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] md:min-h-[85vh] bg-gray-100">
      <section className="w-full max-w-96 p-4 mx-4 mb-4 bg-white shadow-lg rounded-lg text-black">
        <h2 className="text-2xl font-semibold text-center mb-4 text-blue-600">
          Get your device location
        </h2>

        <LocationForm />
      </section>

      <section className="w-full max-w-96 p-4 mx-4 bg-white shadow-lg rounded-lg text-black">
        <h2 className="text-2xl font-semibold text-center mb-4 text-blue-600">
          Select Officer Name
        </h2>

        <Suspense>
          <OfficerNameForm />
        </Suspense>
      </section>
    </div>
  );
};

export default LandingPage;
