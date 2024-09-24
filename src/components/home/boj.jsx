import React from "react";
import logoBoj from "../../utils/images/bojLogo.png";
import imagenBoj from "../../utils/images/bojImage.png";

const Boj = () => {
  const products = [
    {
      id: 0,
      name: "Sacacorcho Pared Tradicional Niquel",
      price: 1085,
      image: "https://www.denis-ros.com/wp-content/uploads/2024/04/Niquel-Negro.jpeg",
    },
    {
      id: 1,
      name: "Sacacorcho Pared Deluxe",
      price: 89.99,
      image: "https://www.denis-ros.com/wp-content/uploads/2024/04/Gris-acero.jpeg",
    }
  ];

  return (
    <div className="my-6 mx-24 flex justify-between items-start">
      {/* Primera imagen grande a la izquierda */}
      <div className="w-1/2 py-6 flex justify-start">
        <img
          src={imagenBoj}
          alt="boj"
          className="h-auto w-full max-w-lg rounded shadow-lg" // Ajusta según el tamaño deseado
        />
      </div>

      {/* Segunda imagen, texto y productos a la derecha */}
      <div className="w-1/2 flex flex-col items-center text-center">
        {/* Centrar la imagen del logo */}
        <div className="flex justify-center">
          <img
            src={logoBoj}
            alt="logo"
            className="h-auto w-44 "
          />
        </div>
        <p className="text-gray-700">
        Desde 1905 en españa, especializandose en la fabricación de abrelatas, sacacorchos y otros utensilios de menaje con los estandares mas altos.

        </p>
        
        {/* Lista de productos */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8 mt-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border border-gray-200 rounded-lg p-4 shadow-lg text-left bg-white"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-lg font-semibold text-gray-700">
                {product.name}
              </h3>
              <p className="text-gray-500 mt-2">
                ${product.price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Boj;
