import { Suspense } from "react";

import WarningBoardForm from "@/app/ui/forms/warningboardform";
import Header from "@/app/ui/header";

const Page = () => {
  return (
    <main>
      <Header title="Warning Borad Form" />

      <Suspense>
        <WarningBoardForm />
      </Suspense>
    </main>
  );
};

export default Page;
