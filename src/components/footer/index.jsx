import React from "react";

const Footer = () => {
  return (
    <div className="bg-crema">
      <div className=" text-gray-800 pt-8 mx-24">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:justify-between font-custom ">
          {/* Sección de Enlaces */}
          <div className="mb-6 lg:mb-0 ">
            <h2 className="text-xl font-bold mb-4">Enlaces Rápidos</h2>
            <ul className="space-y-2 font-custom">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Categorías
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Marcas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Productos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Sección de Información de Contacto */}
          <div className="mb-6 lg:mb-0">
            <h2 className="text-xl font-bold mb-4 font-custom">Contacto</h2>
            <p className="text-gray-600 mb-2 font-custom">
              1234 Calle Ficticia, Ciudad, País
            </p>
            <p className="text-gray-600 mb-2 font-custom">
              Teléfono: (123) 456-7890
            </p>
            <p className="text-gray-600 font-custom">
              Email: contacto@ejemplo.com
            </p>
          </div>

          {/* Sección de Redes Sociales */}
          <div className="mb-6 lg:mb-0">
            <h2 className="text-xl font-bold mb-4 font-custom">Síguenos</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-facebook-f"></i> {/* Font Awesome icon */}
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-twitter"></i> {/* Font Awesome icon */}
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-instagram"></i> {/* Font Awesome icon */}
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                <i className="fab fa-linkedin-in"></i> {/* Font Awesome icon */}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div/>
      {/* Copyright */}
      <div className="bg-gris text-center py-4 mt-8 font-custom">
        <p className="text-gray-600 text-sm mx-24 text-white">
          &copy; {new Date().getFullYear()} Denis & Ros. Todos los derechos
          reservados.
        </p>
      </div>
    </div>
  );
};

export default Footer;
