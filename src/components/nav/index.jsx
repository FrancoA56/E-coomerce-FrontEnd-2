import React from "react";
import { useLocation } from "react-router-dom";
import logoDenis from "../../utils/images/denisRosLogo.png"
import './index.css'; // Asegúrate de importar tu archivo de estilos

const Nav = () => {
  const location = useLocation();
  const isHome = location.pathname === "/"; {/*|| location.pathname === "/shop" */}

  return (
    <>
      {/* Primer div: blanco, texto separado en dos partes */}
      {isHome && (
        <div className="bg-white w-full flex justify-items-stretch font-custom">
          <div className="mx-24 py-2 flex w-full ">
            <a className="text-blackL">Categorias</a>
            <a className="text-blackL">Marcas</a>
            <a className="text-blackL">Productos</a>
            <a className="text-blackL">Tienda</a>
          </div>
          <div className="mx-24 py-2 flex">
            <a className="text-blackL">Blog</a>
          </div>
        </div>
      )}

      {/* Segundo div: cremita, pegajoso */}
      <div className="bg-crema w-full sticky top-0 z-50 flex justify-items-stretch text-etiqueta font-custom">
        <div className="mx-24 py-3 flex w-full">
          <span className="text-gray-900">Black Friday Discounts</span>
        </div>
        <div className="mx-24 py-3 flex">
          {/* Puedes agregar más elementos aquí si es necesario */}
        </div>
      </div>

      {/* Tercer div: blanco, texto separado en dos partes */}
      {isHome && (
        <div className="bg-white w-full flex justify-items-stretch font-custom">
          <div className="mx-24 py-2 flex w-full">
            <a className=" text-blackL">Categorias</a>
            <a className=" text-blackL">Marcas</a>
            <a className=" text-blackL">Productos</a>
          </div>
          <div className="mx-24 py-2 flex">
            <a className="text-blackL">Usuario</a>
          </div>
        </div>
      )}
      <div className="bg-white w-full relative flex items-center font-custom">
        {/* Primer div: Buscador */}
        <div className="absolute left-0 mx-24 py-6 flex w-full max-w-md">
          <input
            type="text"
            placeholder="Buscar producto..."
            className="border border-blackL bg-crema px-4 py-2 w-1/2"
          />
          <button className="ml-2 bg-grisOsc text-white px-4 py-2 hover:bg-gris">
            Buscar
          </button>
        </div>

        {/* Segundo div: Título centrado */}
        <div className="w-full flex justify-center py-6">
          <img src={logoDenis} alt="logoDenis" className="w-1/6"/>
        </div>
      </div>
      <div className="bg-white w-full flex justify-center font-custom">
        <div className="py-2 flex items-center space-x-2 mx-24 font-parrafo">
          <a className="text-blackL px-2">Marcas</a>
          <a className="text-blackL px-2">Marcas</a>
          <a className="text-blackL px-2">Marcas</a>
          <a className="text-blackL px-2">Marcas</a>
          <a className="text-blackL px-2">Marcas</a>
          <a className="text-blackL px-2">Marcas</a>
          <a className="text-blackL px-2">Marcas</a>
          <a className="text-blackL px-2">Marcas</a>
          <a className="text-blackL px-2">Marcas</a>
          <a className="text-blackL px-2">Marcas</a>
          <a className="text-blackL px-2">Marcas</a>
          <a className="text-blackL px-2">Marcas</a>
        </div>
      </div>
      <div className="bg-white w-full flex justify-center font-custom border-t border-black">
        <div className="py-2 flex items-center space-x-2 mx-24 text-etiqueta  ">
          <a className="text-blackL px-2">Categorias</a>
          <a className="text-blackL px-2">Categorias</a>
          <a className="text-blackL px-2">Categorias</a>
          <a className="text-blackL px-2">Categorias</a>
          <a className="text-blackL px-2">Categorias</a>
          <a className="text-blackL px-2">Categorias</a>
          <a className="text-blackL px-2">Categorias</a>
          <a className="text-blackL px-2">Categorias</a>
          <a className="text-blackL px-2">Categorias</a>
          <a className="text-blackL px-2">Categorias</a>
          <a className="text-blackL px-2">Categorias</a>
          <a className="text-blackL px-2">Categorias</a>
        </div>
      </div>
    </>
  );
};

export default Nav;
