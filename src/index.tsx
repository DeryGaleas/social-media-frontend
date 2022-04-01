import React from "react";
import App from "./App";
import { Provider } from "urql";
import client from "./grapqlClient";

import * as ReactDOMClient from "react-dom/client";

const root = ReactDOMClient.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider value={client}>
      <App />
    </Provider>
  </React.StrictMode>
);
