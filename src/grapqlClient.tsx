import { createClient } from "urql";

const client = createClient({
  url: "http://127.0.0.1:8000/graphql/",
  suspense: true,
});

export default client;
