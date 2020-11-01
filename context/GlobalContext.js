import React, { useState, useEffect, useContext, createContext } from "react";

export const GlobalContext = createContext();

class GlobalContextProvider extends React.Component {
  /*{constructor(props) {
        super(props);
        this.state = {  };
    }}*/
  state = {
    authToken: null,
  };

  signIn({ token }) {
    dispatch({ type: "SIGN_IN", token: token });
  }
  signOut() {
    dispatch({ type: "SIGN_OUT" });
    AsyncStorage.removeItem("userToken");
  }
  signUp({ token }) {
    dispatch({ type: "SIGN_IN", token: token });
  }

  render() {
    return (
      <GlobalContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContextProvider;
