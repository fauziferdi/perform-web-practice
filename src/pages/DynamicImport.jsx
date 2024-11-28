import React, { lazy, Suspense, useState } from "react";
const LazyComponent = lazy(() => import("../component/HeavyComponent"));

export default function DynamicImport() {
  const [isVisisble, setIsVisible] = useState(false);
  return (
    <>
      <h1>dynamic import</h1>
      <button
        className="btn btn-primary"
        onClick={() => setIsVisible(!isVisisble)}
      >
        call componet
      </button>
      {isVisisble && (
        <Suspense fallback={<div>Loading...</div>}>
          <LazyComponent />
        </Suspense>
      )}
    </>
  );
}
