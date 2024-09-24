import React, { useState } from "react";
import Nav from "../nav";
import Footer from "../footer";

const Detail = () => {
  const [quantity, setQuantity] = useState(1);

  const productData = {
    id: 1,
    name: "Cuchillo Chef",
    code: "CK1234",
    price: 49.99,
    image:
      "https://www.denis-ros.com/wp-content/uploads/2024/06/Karu12GasBurner6.webp",
    stock: 25,
    shortDescription:
      "Cuchillo de chef de acero inoxidable, ideal para todo tipo de cortes.",
    longDescription:
      "Este cuchillo de chef está fabricado en acero inoxidable de alta calidad y es perfecto para cortar carne, verduras y frutas con facilidad. Mango ergonómico para mayor confort.",
    instructions: "Lavar a mano y secar inmediatamente después de usar.",
    isDisable: false,
    releasedAt: "2024-01-01T00:00:00Z",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
    deletedAt: null,
    brandId: 1,
    categories: [],
    labels: [],
    gallery: [],
    cart: [],
    reviews: [],
  };

  const handleAddToCart = () => {
    alert(`${quantity} ${productData.name} added to the cart!`);
    // Aquí iría la lógica para agregar el producto al carrito
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <>
      {/* Información del producto reorganizada */}
      <div className="w-full md:w-1/2 p-4 flex font-custom">
        <div>
          <h1 className="text-titulo font-custom font-bold mb-2">
            {productData.name}
          </h1>
          <p className="text-etiqueta">{productData.shortDescription}</p>
          <div className="my-4">
            <span className="text-etique font-custom text-gray-800">
              ${productData.price}
            </span>

            {/* Sección para seleccionar la cantidad */}
            <div className="flex items-center mb-4">
              <label htmlFor="quantity" className="text-sm text-gray-600 mr-2">
                Cantidad:
              </label>
              <input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="border border-gray-300 rounded-md p-2 w-16"
              />
            </div>
          </div>

          {/* Botón para agregar al carrito */}
          <button
            onClick={handleAddToCart}
            className="bg-grisOsc text-white px-4 py-2 rounded-lg hover:bg-gris transition duration-300 w-full md:w-auto"
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default Detail;
