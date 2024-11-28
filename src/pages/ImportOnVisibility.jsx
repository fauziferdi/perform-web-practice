import React, { lazy, Suspense, useState } from "react";
import { useInView } from "react-intersection-observer";
const LazyComponent = lazy(() => import("../component/HeavyComponent"));

export default function ImportOnVisibility() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <>
      <h1>visibility</h1>;<div style={{ height: "150vh" }}></div>
      <div ref={ref}>
        {inView && (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
          </Suspense>
        )}
      </div>
    </>
  );
}
