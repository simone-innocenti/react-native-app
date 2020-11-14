import React, { createContext, useReducer } from "react";
import { Button } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import { AuthReducer } from "../reducers/AuthReducer";

import AccessNavigation from "../routers/accessStack";

const AuthContextPovider = (props) => {
  const { setLoggedIn, setLoading, currentData, token } = props;
  const [authState, dispatch] = useReducer(AuthReducer, {
    refreshToken: token,
    userToken: token,
    profile: currentData,
  });

  return (
    <AuthContext.Provider
      value={{ authState, dispatch, setLoggedIn, setLoading }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextPovider;
