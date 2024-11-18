import { Suspense } from "react";

import TLPForm from "@/app/ui/forms/tlpform";
import Header from "@/app/ui/header";

const Page = () => {
  return (
    <main>
      <Header title="TLP Form" />

      <Suspense>
        <TLPForm />
      </Suspense>
    </main>
  );
};

export default Page;
