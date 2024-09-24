import React, { useState } from "react";
import Footer from "../footer";
import Nav from "../nav";
import { motion, AnimatePresence } from "framer-motion";
import EmileHenry from "./emileHenry";
import Boj from "./boj";
import DenisRos from "./denisRos";
import Mauviel from "./mauviel";
import NordicWare from "./nordicWare";
import Ooni from "./ooni";

// Simulación de datos de productos
const products = [
  {
    id: 9,
    name: "Set de Cuchillos",
    price: 59.99,
    image: "https://www.denis-ros.com/wp-content/uploads/2024/01/OoniDualScales.webp",
  },
  {
    id: 10,
    name: "Licuadora",
    price: 89.99,
    image: "https://www.denis-ros.com/wp-content/uploads/2024/01/OoniDualScales.webp",
  },
  {
    id: 11,
    name: "Set de Ollas",
    price: 149.99,
    image: "https://www.denis-ros.com/wp-content/uploads/2024/01/OoniDualScales.webp",
  },
  {
    id: 12,
    name: "Freidora de Aire",
    price: 199.99,
    image: "https://www.denis-ros.com/wp-content/uploads/2024/01/OoniDualScales.webp",
  },
  // Puedes añadir más productos si lo necesitas
];

const Home = () => {
  const [currentPage, setCurrentPage] = useState("Inicio");
  const [direction, setDirection] = useState(0);
  const pages = [
    "Denis & Ros",
    "Emile Henry",
    "Ooni",
    "Mauviel 1830",
    "Boj",
    "Nordic Ware",
  ];

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const handleClick = (page) => {
    const newDirection = pages.indexOf(page) - pages.indexOf(currentPage);
    setDirection(newDirection);
    setCurrentPage(page);
  };

  return (
    <div>
      {/* Barra de Navegación */}
      <Nav />

      {/* Contenido Principal */}
      <div className="w-full ">
        {/* Video a pantalla completa */}
        <div className="w-full mt-4">
          <iframe
            className="w-full h-[500px]" // Ajusta la altura según tus necesidades
            src="https://www.youtube.com/embed/xicZRboWqAI"
            title="Video de YouTube"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Texto o Contenido Adicional */}
        <div className="bg-crema mt-6">
          <div className="mx-24 py-8 ">
            <h2 className="text-titulo font-custom text-gray-800">
              Bienvenido a nuestra tienda
            </h2>
            <p className="text-lg text-gray-600 mt-4">
              Aquí encontrarás una amplia gama de productos. Explora nuestras
              categorías y descubre las mejores ofertas.
            </p>
          </div>
        </div>

        {/* Productos */}
        <div>
          <div className="text-etique font-custom pt-6">
            Nuestros productos más vendidos
          </div>
          <div className="mx-24 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {products.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="border border-gray-200 rounded-lg p-4 shadow-lg"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover mb-4 rounded-md"
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
        <div className="my-6">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => handleClick(page)}
              className={`${currentPage === page ? "px-4 font-bold text-grisOsc font-custom" : "font-custom px-4 text-gris"}`}
            >
              {page}
            </button>
          ))}
        </div>
        {/* Contenedor de animaciones */}
        <div className="relative w-full h-full mt-6 bg-crema">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage}
              custom={direction}
              initial="enter"
              animate="center"
              exit="exit"
              variants={variants}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="top-0 left-0 w-full h-full"
            >
              {currentPage === "Denis & Ros" && <DenisRos />}
              {currentPage === "Emile Henry" && <EmileHenry />}
              {currentPage === "Ooni" && <Ooni />}
              {currentPage === "Mauviel 1830" && <Mauviel />}
              {currentPage === "Boj" && <Boj />}
              {currentPage === "Nordic Ware" && <NordicWare />}
            </motion.div>
          </AnimatePresence>
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default Home;
