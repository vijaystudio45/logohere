import * as Auth from "../types/CountryType";

export const CountryDataReducer = (state = {countryData : []}, action) => {
  switch (action.type) {
    case Auth.COUNTRY_SHOW_DATA_REQUEST:
      return { loading: true };

    case Auth.COUNTRY_SHOW_DATA_SUCCESS:
      return {
        loading: false,
        success: true,
        countryData: action.payload,
        message: action.payload.message,
      };

    case Auth.COUNTRY_SHOW_DATA_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
