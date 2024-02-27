import * as Auth from "../types/CountryType";
import axios from "axios";
import { BACKEND_URL } from "../../environment";

export const CountryDataAction = (params) => async (dispatch) => {
  try {
    dispatch({
      type: Auth.COUNTRY_SHOW_DATA_REQUEST,
    });

    // const {
    //   authReducer: { userData },
    // } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        // Authorization: `Bearer ${userData.token}`,
      },
    };

    const { data } = await axios.post(
      `https://onlinesim.herokuapp.com/`,
      params,
      config
    );

    dispatch({
      type: Auth.COUNTRY_SHOW_DATA_SUCCESS,
      payload: data,
    });

    return true;
  } catch (error) {
    dispatch({
      type: Auth.COUNTRY_SHOW_DATA_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data?.message
          : error.response && error.response.data?.message
          ? error.response.data?.message?.username
          : error.message,
    });
  }
};
