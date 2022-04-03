import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "urql";
import client from "./grapqlClient";
import { Spin } from "antd";

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <Suspense
        fallback={
          <Spin
            size={"large"}
            style={{ position: "absolute", left: "50%", top: "50%" }}
          />
        }
      >
        <App />
      </Suspense>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
