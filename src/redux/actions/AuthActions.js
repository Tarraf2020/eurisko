import axios from "axios";

const AuthActionType = {
  LOGOUT_SUCCESS: "LOGOUT_SUCCESS",
  LOGOUT_FAIL: "LOGOUT_FAIL",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
};

const LoginAuthAction = (loginState, history, setErrorHandler) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/auth/signin", loginState);
      const { data } = res;
      dispatch({ type: AuthActionType.LOGIN_SUCCESS, payload: {data, username: loginState.username}, setErrorHandler });
      history("/");
    } catch (error) {
      if (error) {
        dispatch({
          type: AuthActionType.LOGIN_FAIL,
          payload: error.response.message,
        });
      }
      setErrorHandler({ hasError: true, message: error.data.message });
    }

  };
};

const LogOutAuthAction = (history) => {
  return (dispatch) => {
    dispatch({
      type: AuthActionType.LOGOUT_SUCCESS,
      payload: {},
    });
    history("/login");
  };
};

export { AuthActionType, LogOutAuthAction, LoginAuthAction };
