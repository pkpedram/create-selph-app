
import _dataManager from "../dataManager";

const publicApi = {
  checkLayoutVersion: () => async (dispatch) => {
    if (window.innerWidth <= 900) {
      dispatch({ type: "SET_MOBILE", payload: true });
    } else {
      dispatch({ type: "SET_MOBILE", payload: false });
    }
    window.addEventListener(
      "resize",
      function() {
        if (window.innerWidth <= 900) {
          dispatch({ type: "SET_MOBILE", payload: true });
        } else {
          dispatch({ type: "SET_MOBILE", payload: false });
        }
      },
      true
    );
  },
};

export default publicApi;
