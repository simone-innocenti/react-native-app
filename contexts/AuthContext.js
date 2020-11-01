import React, { createContext, useReducer } from "react";
import { AuthReducer } from "../reducers/AuthReducer";
export const AuthContext = createContext();
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
