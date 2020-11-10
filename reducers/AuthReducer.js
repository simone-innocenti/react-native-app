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
        refreshToken: action?.refresh,
      };
    case "LOGIN":
      return {
        ...state,
        //refreshToken: action?.refresh,
        userToken: action.token,
        profile: { ...action.profile },
      };
    case "LOGOUT":
      return {
        ...state,
        //refreshToken: null,
        userToken: null,
      };
    case "TEST":
      return { ...state, userData: { nome: "simone", cognome: "innocenti" } };
    default:
      return {
        ...state,
      };
  }
};
