import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
// import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import { } from "./Redux/actions";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Shop from "./components/shop";
import Cart from "./components/cart";
import Checkout from "./components/checkout";
import Detail from "./components/detail";
import User from "./components/user";
import UserDetail from "./components/userDetail";
import Purchases from "./components/purchases";
import About from "./components/about";

function App() {
 

  // const URL = process.env.REACT_APP_API;
  // const dispatch = useDispatch();
  // const isLoggedIn = useSelector((state) => state.login);
  // const { logout } = useAuth0();

  // useEffect(() => {
  //   const storedToken = localStorage.getItem("token");
  //   if (storedToken && !isLoggedIn) {
  //     const login = async () => {
  //       try {
  //         const headerToken = {
  //           headers: {
  //             Authorization: `${storedToken}`,
  //           },
  //         };

  //         await axios.get(`${URL}/api/user/validate`, headerToken); // Verifica que el token no haya expirado

  //         const user = decodeToken(storedToken); // Decodifica el token y se obtienen los datos del usuario ya logueado
  //         dispatch(logInUser(user)); // Actualiza el estado global con el usuario logueado
  //         dispatch(logInSet(true));
  //       } catch (error) {
  //         localStorage.removeItem("token");
  //         await logout();
  //       }
  //     };
  //     login();
  //   }
  // }, [dispatch, isLoggedIn, URL]);

  return (
    <div className="App">
      <Routes>
        <Route className="dark" path="/" element={<Home />} />
        <Route className="dark" path="/login" element={<Login />} />
        <Route className="dark" path="/register" element={<Register />} />
        <Route className="dark" path="/shop" element={<Shop />} />
        <Route className="dark" path="/cart" element={<Cart />} />
        <Route className="dark" path="/checkout" element={<Checkout />} />
        <Route className="dark" path="/detail/:id" element={<Detail />} />
        <Route className="dark" path="/user" element={<User />} />
        <Route className="dark" path="/user-detail" element={<UserDetail />} />
        <Route className="dark" path="/purchases" element={<Purchases />} />
        <Route className="dark" path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
