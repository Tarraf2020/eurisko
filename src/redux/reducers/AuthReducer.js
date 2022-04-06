import axios from "axios";
import { AuthActionType } from "../actions/AuthActions";

const authState = {
  isLoggedIn: false,
  user: {},
};
const getAuthState = () => {
  const auth = localStorage.getItem("auth");
  
  try {
    const authobj = JSON.parse(auth);
    const { accessToken } = authobj.user.data;
      axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      return authobj;
  } catch (error) {
    return authState;
  }
};
const newAuth = getAuthState();
const authreducer = (state = newAuth, action) => {
  switch (action.type) {
    
    case AuthActionType.LOGOUT_SUCCESS:
      window.localStorage.clear();
      return authState;

    case AuthActionType.LOGIN_SUCCESS:
      const loginAuthState = {
        isLoggedIn: true,
        user: action.payload,
      };
      localStorage.setItem("auth", JSON.stringify(loginAuthState));
      return loginAuthState;

    default:
      return state;
  }
};

export default authreducer;
