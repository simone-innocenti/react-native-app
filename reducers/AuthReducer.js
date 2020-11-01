/*
  #############################################################################
  CONTIENE TUTTE LE FUNZIONI DI AUTENTICAZIONE E GESTIONE UTENTE
  #############################################################################
*/
export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "REFRESH":
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      };
    case "LOGIN":
      return {
        ...state,
        isSignout: false,
        userToken: action.token,
      };
    case "LOGOUT":
      return {
        ...state,
        isSignout: true,
        userToken: null,
      };
    default:
      return {
        ...state,
      };
  }
};
