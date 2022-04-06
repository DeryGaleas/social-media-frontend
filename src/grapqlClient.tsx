import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from "@apollo/client/utilities";
import { createClient } from "graphql-ws";

const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? `JWT ${token}` : "";
};

const getUserData = (): { username: string; password: string } => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : {};
};

const wsClient = createClient({
  url: `ws://localhost:8000/graphql/?username=${
    getUserData().username
  }&password=${getUserData().password}`,
});
const wsLink = new GraphQLWsLink(wsClient);

const httpLink = createHttpLink({
  uri: "http://127.0.0.1:8000/graphql/",
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: getToken(),
    },
  };
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
