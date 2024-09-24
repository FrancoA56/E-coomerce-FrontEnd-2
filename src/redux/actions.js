import {
  EDIT_USER,
  GET_USER,
  ADD_TO_CART,
  LOGIN_USER,
  SET_PAGE,
  LOGOUT_USER,
} from "./types";
import axios from "axios";

const URL = process.env.REACT_APP_API;

export const logInUser = (payload) => {
  return async function (dispatch) {
    try {
      //actualizamos redux con el usuario
      dispatch({
        type: LOGIN_USER,
        payload: payload,
      });
      //nos traemos el cart del local storage, lo grabamos en la bdd y checkeamos que no hay nada anterior en la bdd
      const localStorageCart = localStorage.getItem("cart");
      if (localStorageCart) {
        const parsedCart = JSON.parse(localStorageCart);
        const idsCartLocalStorage = parsedCart.map((p) => p.id);
        const userAndIds = {
          email: payload.email,
          products: idsCartLocalStorage,
        };
        const responsePostLocalStorage = await axios.post(
          `${URL}/api/cart`,
          userAndIds
        );
        const responsePostLocalStorageData = responsePostLocalStorage.data.data;
        if (responsePostLocalStorageData.length) {
          localStorage.removeItem("cart");
          const responseGetBDD = await axios.get(
            `${URL}/api/shop/order?email=${payload.email}`
          );
          // si hay algo anterior en la bdd nos traemos toda la info y la sobreescribimos
          if (responseGetBDD.data.length > idsCartLocalStorage.length) {
            const responseGetAllBDD = await axios.get(
              `${URL}/api/preset?ids=${responseGetBDD.data}`
            );
            dispatch({
              type: ADD_ALL_MODEL_CART,
              payload: responseGetAllBDD.data,
            });
            return Swal.fire({
              text: "Your cart has been updated and merged with your account's items.",
              title: "Login",
              icon: "info",
              confirmButtonColor: "rgb(94 195 191)",
            });
            // si no hay nada que actualizar la bdd esta actualizada y le informamos al usuario q se logeo correctamente
          }
        }
      }
      // si no habia carrito se busca si el usuario tiene carrito en la bdd y si es correcto se guarda en redux
      const responseGetAllDataBase = await axios.get(
        `${URL}/api/shop/order?email=${payload.email}`
      );

      if (responseGetAllDataBase.data.length) {
        const responseGetAllInfoPresets = await axios.get(
          `${URL}/api/preset?ids=${responseGetAllDataBase.data}`
        );
        console.log(
          "responseGetAllInfoPresets",
          responseGetAllInfoPresets.data
        );

        return dispatch({
          type: ADD_ALL_MODEL_CART,
          payload: responseGetAllInfoPresets.data,
        });
      }
    } catch (error) {
      showErrorAlert(error.message);
    }
  };
};

export const logOutUser = () => {
  // ----------------------------------------------------------------
  return function (dispatch) {
    localStorage.removeItem("token"); // Eliminar del localStorage

    dispatch({
      type: LOGOUT_USER,
    });
  };
};

export const setPage = (pageNumber) => {
  return { type: SET_PAGE, payload: pageNumber };
};
