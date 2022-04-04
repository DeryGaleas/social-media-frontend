import { gql, useQuery } from "urql";
import React, { ReactElement, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IsLoggedInQuery } from "../generated/graphql";

const IS_LOGGED_IN = gql`
  query isLoggedIn {
    isLoggedIn
  }
`;

const AuthRequired = ({
  children,
}: {
  children: ReactElement[] | ReactElement;
}) => {
  const nav = useNavigate();

  const [result] = useQuery<IsLoggedInQuery>({
    query: IS_LOGGED_IN,
  });

  useEffect(() => {
    if (!result.data?.isLoggedIn) {
      nav("/login", { replace: true });
    }
  }, [result, nav]);

  return <>{children}</>;
};

export default AuthRequired;
