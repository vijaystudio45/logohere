import * as Auth from "../types/AuthType";
import axios from "axios";
import { BACKEND_URL } from "../../environment";

export const RegisterAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.REGISTER_REQUEST,
    });

    const { data } = await axios.post(
      `${BACKEND_URL}auth/registration/`,
      params
    );
    dispatch({
      type: Auth.REGISTER_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.REGISTER_FAIL,
      payload:
        error.response && error.response.data?.message?.email?.[0]
          ? error.response.data?.message?.email?.[0]
          : error.response && error.response.data?.message?.username?.[0]
          ? error.response.data?.message?.username?.[0]
          : error.message,
    });
  }
};

export const LoginAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.LOGIN_REQUEST,
    });

    const { data } = await axios.post(`${BACKEND_URL}auth/user-login/`, params);

    dispatch({
      type: Auth.LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userData", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: Auth.LOGIN_FAIL,
      payload:
        error.response && error.response.data?.message
          ? error.response.data?.message
          : error.message,
    });
  }
};

export const VerifyEmailAction = (decodeId, token) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.VERIFY_EMAIL_REQUEST,
    });

    const { data } = await axios.get(
      `${BACKEND_URL}auth/verify-email/${decodeId}`
    );

    dispatch({
      type: Auth.VERIFY_EMAIL_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.VERIFY_EMAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const ForgotPasswordAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.FORGOT_PASSWORD_REQUEST,
    });

    const { data } = await axios.post(
      `${BACKEND_URL}auth/forget-password/`,
      params
    );

    dispatch({
      type: Auth.FORGOT_PASSWORD_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.FORGOT_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const SetResetPasswordAction =
  (params, token, uid) => async (dispatch) => {
    try {
      dispatch({
        type: Auth.FORGOT_PASSWORD_SET_REQUEST,
      });

      const { data } = await axios.put(
        `${BACKEND_URL}auth/reset-password/${token}/${uid}/`,
        params
      );

      dispatch({
        type: Auth.FORGOT_PASSWORD_SET_SUCCESS,
        payload: data,
      });

      return true;
    } catch (error) {
      dispatch({
        type: Auth.FORGOT_PASSWORD_SET_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const ChangePasswordAction = (params) => async (dispatch, getState) => {
  try {
    dispatch({
      type: Auth.CHANGE_PASSWORD_REQUEST,
    });

    const {
      authReducer: { userData },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.post(
      `${BACKEND_URL}change-password/`,
      params,
      config
    );

    dispatch({
      type: Auth.CHANGE_PASSWORD_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.CHANGE_PASSWORD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const LogoutAction = () => (dispatch) => {
  localStorage.removeItem("userData");
  localStorage.removeItem("Subscription");

  dispatch({ type: Auth.USER_LOGOUT });
};
