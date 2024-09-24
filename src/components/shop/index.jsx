import React, { useState } from "react";
import Nav from "../nav";
import Footer from "../footer";
import Products from "../../utils/products/products.json";
import "./index.css";

const Shop = () => {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const categories = ["Todos", "Electrónica", "Hogar", "Jardín", "Cocina"];
  const tags = ["Nuevo", "Popular", "Oferta", "Edición Limitada"];
  const brands = ["Samsung", "Apple", "Sony", "LG"];

  const handleTagChange = (tag) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tag)
        ? prevTags.filter((t) => t !== tag)
        : [...prevTags, tag]
    );
  };

  const handleBrandChange = (brand) => {
    setSelectedBrands((prevBrands) =>
      prevBrands.includes(brand)
        ? prevBrands.filter((b) => b !== brand)
        : [...prevBrands, brand]
    );
  };

  return (
    <>
      <Nav />
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-titulo font-custom font-bold text-center text-grisOsc mb-12">
          Tienda
        </h1>
        <div className="grid grid-cols-5 mx-24">
          <div className="col-span-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Products.map((product) => (
                <div
                  key={product.id}
                  className="bg-crema border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-48 w-full object-cover transform transition-transform duration-500 ease-in-out hover:scale-125"
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-800">
                      {product.name}
                    </h2>
                    <div className="mt-4">
                      <span className="text-xl font-bold text-grisOsc">
                        ${product.price.toFixed(2)}
                      </span>
                    </div>
                    <button className="mt-6 w-full bg-grisOsc text-white py-2 rounded-lg hover:bg-gris transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Barra de Filtros */}
          <div className="ml-6 col-span-1 text-grisOsc mx-auto font-custom bg-crema p-4 rounded-lg h-fit shadow-lg border border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-grisOsc">Filtros</h2>

            {/* Filtro de Categorías */}
            <div className="mb-6">
              <h3 className="block mb-2 text-gray-700 font-semibold text-left">
                Categoría
              </h3>
              <ul className="space-y-2 text-left">
                {categories.map((category) => (
                  <li key={category} className="ml-6">
                    <label className="inline-flex items-center custom-radio">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={() => setSelectedCategory(category)}
                        className="form-checkbox h-4 w-4 hidden" /* Ocultamos el input */
                      />
                      <span className="radio-custom"></span>
                      <span className="ml-2 text-grisOsc">{category}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Filtro de Etiquetas */}
            <div className="mb-6">
              <h3 className="block mb-2 text-gray-700 font-semibold text-left">
                Etiquetas
              </h3>
              <ul className="space-y-2 text-left">
                {tags.map((tag) => (
                  <li key={tag} className="ml-6">
                    <label className="inline-flex items-center custom-checkbox">
                      <input
                        type="checkbox"
                        value={tag}
                        checked={selectedTags.includes(tag)}
                        onChange={() => handleTagChange(tag)}
                        className="form-checkbox h-4 w-4 opacity-0 absolute"
                      />
                      <span className="checkbox-custom"></span>
                      <span className="ml-2 text-gray-700">{tag}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Filtro de Marcas */}
            <div className="mb-6">
              <h3 className="block mb-2 font-semibold text-left">Marcas</h3>
              <ul className="space-y-2 text-left">
                {brands.map((brand) => (
                  <li key={brand} className="ml-6">
                    <label className="inline-flex items-center custom-checkbox">
                      <input
                        type="checkbox"
                        value={brand}
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandChange(brand)}
                        className="form-checkbox h-4 w-4 opacity-0 absolute"
                      />
                      <span className="checkbox-custom"></span>
                      <span className="ml-2 text-grisOsc ">{brand}</span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Filtro de Precio */}
            <div className="mb-6">
              <h3 className="block mb-2 text-grisOsc font-semibold text-left">
                Rango de Precios
              </h3>
              <input
                type="range"
                min={0}
                max={1000}
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([0, parseInt(e.target.value, 10)])
                }
                className="w-full "
              />
              <div className="flex justify-between text-sm text-grisOsc mt-2">
                <span>$0</span>
                <span>${priceRange[1]}</span>
                <span>$1000</span>
              </div>
            </div>

            {/* Botón de Aplicar Filtros */}
            <button className="w-full bg-grisOsc text-white py-2 rounded-lg hover:bg-gris transition-colors duration-300">
              Aplicar Filtros
            </button>

            {/* Botón de Limpiar Filtros */}
            <button
              className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg mt-4 hover:bg-gray-300 transition-colors duration-300"
              onClick={() => {
                setPriceRange([0, 1000]);
                setSelectedCategory("");
                setSelectedTags([]);
                setSelectedBrands([]);
              }}
            >
              Limpiar Filtros
            </button>
          </div>
        </div>
      </div>
   
      <Footer />
    </>
  );
};

export default Shop;
