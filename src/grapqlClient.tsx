import { createClient } from "urql";

const client = createClient({
  url: "http://127.0.0.1:8000/graphql/",
  suspense: true,
  fetchOptions: () => {
    const token = localStorage.getItem("token");
    return token ? { headers: { Authorization: `JWT ${token}` } } : {};
  },
});

export default client;
