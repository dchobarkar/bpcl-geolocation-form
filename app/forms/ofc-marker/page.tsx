import { Suspense } from "react";

import OFCMarkerForm from "@/app/ui/forms/ofcmarkerform";
import Header from "@/app/ui/header";

const Page = () => {
  return (
    <main>
      <Header title="OFC Marker Form" />

      <Suspense>
        <OFCMarkerForm />
      </Suspense>
    </main>
  );
};

export default Page;
