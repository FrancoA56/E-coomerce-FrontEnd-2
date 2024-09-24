import React from "react";
import logoDenis from "../../utils/images/denisRosLogo.png";

const DenisRos = () => {
  const products = [
    {
      id: 0,
      name: "Vela Corazon",
      price: 1085,
      image:
        "https://www.denis-ros.com/wp-content/uploads/2024/02/20231206_144610-scaled.jpg",
    },
    {
      id: 1,
      name: "Alfombra Louis",
      price: 89.99,
      image:
        "https://www.denis-ros.com/wp-content/uploads/2022/10/alfombra-koh-ronh.jpeg",
    },
  ];

  return (
    <div className="my-6 mx-24 flex justify-between items-start">
      {/* Primera imagen grande a la izquierda */}
      <div className="w-1/2 py-6 flex justify-start">
        <img
          src="https://www.denis-ros.com/wp-content/uploads/2023/08/Denis-Ros-marca.jpg"
          alt="denisRos"
          className="h-auto w-full max-w-lg rounded shadow-lg" // Ajusta según el tamaño deseado
        />
      </div>

      {/* Segunda imagen, texto y productos a la derecha */}
      <div className="w-1/2 flex flex-col items-center text-center space-y-4">
        {/* Centrar la imagen del logo */}
        <div className="flex justify-center">
          <img src={logoDenis} alt="logo" className="h-auto w-60 mt-6 " />
        </div>
        <p className="text-gray-700">
          Desde hace 6 generaciones, Emile Henry transmite la pasión por la
          cerámica de calidad, hecha a mano en los talleres de Borgoña.
          Orgullosos de ofrecer nuestra experiencia de Tierra y Fuego para crear
          deliciosas recetas llenas de sabor.
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
                className="w-full h-52 object-cover mb-4 rounded-md"
              />
              <h3 className="text-lg font-semibold text-gray-700">
                {product.name}
              </h3>
              <p className="text-gray-500 mt-2">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DenisRos;
