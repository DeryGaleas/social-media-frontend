import { gql } from "@apollo/client";
import { selector } from "recoil";
import client from "../grapqlClient";
import { IsLoggedInQuery } from "../generated/graphql";

export const tokenExist = selector({
  key: "tokenExist",
  get: () => {
    const token = localStorage.getItem("token");
    return !!token;
  },
});

const IS_LOGGED_IN = gql`
  query isLoggedIn {
    isLoggedIn
  }
`;

export const isLoggedInSelector = selector({
  key: "isLoggedIn",
  get: async () => {
    const { data } = await client.query<IsLoggedInQuery>({
      query: IS_LOGGED_IN,
      fetchPolicy: "network-only",
    });
    return data.isLoggedIn;
  },
});
