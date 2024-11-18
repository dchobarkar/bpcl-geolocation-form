import { Suspense } from "react";

import KMPostForm from "@/app/ui/forms/kmpostform";
import Header from "@/app/ui/header";

const Page = () => {
  return (
    <main>
      <Header title="KM Post Form" />

      <Suspense>
        <KMPostForm />
      </Suspense>
    </main>
  );
};

export default Page;
