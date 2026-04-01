import VerifyContainer from "@/feature/_user/verify/container/VerifyContainer";
import React, { Suspense } from "react";

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyContainer />
    </Suspense>
  )
}

export default page