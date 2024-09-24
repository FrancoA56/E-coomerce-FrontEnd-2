import React from "react";
import logoOoni from "../../utils/images/ooniLogo.png";

const Ooni = () => {
  const products = [
    {
      id: 0,
      name: "Horno Ooni Karu 16",
      price: 1085,
      image: "https://www.denis-ros.com/wp-content/uploads/2024/01/karu16pizzaovenUS.jpg",
    },
    {
      id: 1,
      name: "Horno Ooni Fyra 12",
      price: 89.99,
      image: "https://www.denis-ros.com/wp-content/uploads/2023/08/Ooni_Fyra_Lifestyle.png",
    }
  ];

  return (
    <div className="my-6 mx-24 flex justify-between items-start">
      {/* Primera imagen grande a la izquierda */}
      <div className="w-1/2 py-6 flex justify-start">
        <img
          src="https://www.denis-ros.com/wp-content/uploads/2023/08/Ooni-marca.jpg"
          alt="ooni"
          className="h-auto w-full max-w-lg rounded shadow-lg" // Ajusta según el tamaño deseado
        />
      </div>

      {/* Segunda imagen, texto y productos a la derecha */}
      <div className="w-1/2 flex flex-col items-center text-center space-y-4">
        {/* Centrar la imagen del logo */}
        <div className="flex justify-center">
          <img
            src={logoOoni}
            alt="logo"
            className="h-auto w-48 mt-6 "
          />
        </div>
        <p className="text-gray-700">
          Ooni es una marca reconocida por sus hornos de pizza portátiles que
          permiten cocinar pizzas perfectas en cualquier lugar. Con un diseño
          innovador y alta calidad, Ooni ha transformado la experiencia de
          cocinar pizza en casa.
        </p>
        
        {/* Lista de productos */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-8">
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

export default Ooni;
