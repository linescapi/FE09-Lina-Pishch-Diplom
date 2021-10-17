import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Providers } from "./store";
import { Routing } from "./store/Routing/Routing";

export const App = () => {
  return (
    <Providers>
      <Router>
        <Routing />
      </Router>
    </Providers>
  );
};
