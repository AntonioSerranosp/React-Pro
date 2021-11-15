import React from "react";
import { Navigation } from "../router/Navigation";

export const LazyLayout = () => {
  return (
    <div>
      <h1>Lazy module - main page</h1>
      <Navigation />
    </div>
  );
};

export default LazyLayout;
