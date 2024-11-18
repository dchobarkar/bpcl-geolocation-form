import { Suspense } from "react";

import TurningMarkerForm from "@/app/ui/forms/turningmarkerform";
import Header from "@/app/ui/header";

const Page = () => {
  return (
    <main>
      <Header title="Turning Marker Form" />

      <Suspense>
        <TurningMarkerForm />
      </Suspense>
    </main>
  );
};

export default Page;
