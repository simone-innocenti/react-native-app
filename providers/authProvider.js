import React, { createContext, useReducer } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { AuthReducer } from "../reducers/AuthReducer";

import AccessNavigation from "../routers/accessStack";

const AuthContextPovider = (props) => {
  const { loggedIn, setLoggedIn } = props;
  const [authState, dispatch] = useReducer(AuthReducer, {
    userToken: null,
    isLoading: true,
  });

  return (
    <AuthContext.Provider value={{ authState, dispatch, setLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextPovider;
