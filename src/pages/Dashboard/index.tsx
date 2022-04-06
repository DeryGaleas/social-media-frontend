import { gql, useSubscription } from "@apollo/client";
import { All_MessagesSubscription } from "../../generated/graphql";

const ALL_MESSAGES = gql`
  subscription all_messages {
    myMessages {
      id
      content
      creationDate
      received
      seen
      sender {
        id
        username
      }
    }
  }
`;

const Dashboard = () => {
  useSubscription<All_MessagesSubscription>(ALL_MESSAGES, {
    onSubscriptionData: (data) => {
      console.log(data);
    },
  });
  return <h1>Dashboard</h1>;
};

export default Dashboard;
