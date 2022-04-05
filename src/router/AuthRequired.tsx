import React, { ReactElement, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isLoggedInSelector } from "../state/recoil";

const AuthRequired = ({
  children,
}: {
  children: ReactElement[] | ReactElement;
}) => {
  const nav = useNavigate();
  const location = useLocation();
  const isLoggedIn = useRecoilValue(isLoggedInSelector);

  useEffect(() => {
    if (isLoggedIn) {
      if (location.pathname === "/login") {
        nav("/", { replace: true });
      }
    } else {
      nav("/login", { replace: true });
    }
  }, [isLoggedIn]);

  return <>{children}</>;
};

export default AuthRequired;
