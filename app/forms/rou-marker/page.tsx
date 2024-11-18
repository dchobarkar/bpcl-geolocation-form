import { Suspense } from "react";

import ROUMarkerForm from "@/app/ui/forms/roumarkerform";
import Header from "@/app/ui/header";

const Page = () => {
  return (
    <main>
      <Header title="ROU Marker Form" />

      <Suspense>
        <ROUMarkerForm />
      </Suspense>
    </main>
  );
};

export default Page;
