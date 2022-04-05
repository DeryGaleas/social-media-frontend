import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import client from "./grapqlClient";
import { Spin } from "antd";
import { RecoilRoot } from "recoil";
import { ApolloProvider } from "@apollo/client";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RecoilRoot>
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
      </RecoilRoot>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
