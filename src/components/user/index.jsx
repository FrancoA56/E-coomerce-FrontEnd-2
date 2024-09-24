import React, { useState } from "react";
import Nav from "../nav";
import Footer from "../footer";
import { UserCart } from "./cart";
import { UserDetails } from "./detalles";
import { UserPurchases } from "./purchases";

// Componente principal Users
const Users = () => {
  const [activeTab, setActiveTab] = useState("details"); // Estado para controlar la vista activa

  return (
    <>
      <Nav />
      <div>
        {/* Barra de navegación simple */}
        <nav className="font-custom text-etiqueta my-4 mx-24">
          <ul className="grid grid-cols-3 justify-items-center">
            <li
              style={{
                marginRight: "20px",
                cursor: "pointer",
                fontWeight: activeTab === "details" ? "bold" : "normal",
              }}
              onClick={() => setActiveTab("details")}
            >
              Detalles
            </li>
            <li
              style={{
                marginRight: "20px",
                cursor: "pointer",
                fontWeight: activeTab === "cart" ? "bold" : "normal",
              }}
              onClick={() => setActiveTab("cart")}
            >
              Carrito
            </li>
            <li
              style={{
                cursor: "pointer",
                fontWeight: activeTab === "purchases" ? "bold" : "normal",
              }}
              onClick={() => setActiveTab("purchases")}
            >
              Compras
            </li>
          </ul>
        </nav>

        {/* Renderizado condicional según la pestaña activa */}
        <div className="font-custom">
          {activeTab === "details" && <UserDetails />}
          {activeTab === "cart" && <UserCart />}
          {activeTab === "purchases" && <UserPurchases />}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Users;
