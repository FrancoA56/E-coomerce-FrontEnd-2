import React, { useState } from "react";
import Nav from "../nav";
import Footer from "../footer";

const productData = {
  id: 1,
  name: "New Egg",
  code: "EH8409",
  price: 43800.0,
  image:
    "https://www.denis-ros.com/wp-content/uploads/2023/08/the-egg-nest.webp",
  gallery: [
    "https://www.denis-ros.com/wp-content/uploads/2023/08/WhatsApp-Image-2022-11-11-at-14.34.08.jpeg",
    "https://www.denis-ros.com/wp-content/uploads/2023/08/xthe-egg-nest.jpg.pagespeed.ic_.UmngxPyc3T.jpg",
    "https://www.denis-ros.com/wp-content/uploads/2023/08/348409-1.webp",
  ],
  stock: 25,
  variations: ["New blue", "Toscane", "Rojo", "Verde"],
  shortDescription:
    "El New Egg una nueva manera de hacer exquisitas recetas con huevo",
  longDescription:
    "El New Egg le permite cocinar y servir huevos de varias maneras, clásicas o creativas, simples y rápidas o refinadas. Versátil, su tapa cumple una doble función como huevera, mientras que su base servirá como bol para acompañar su huevo cocido con una sopa, una ensalada o papas fritas. Diseñado para cocinar 1, 2 o 3 huevos, como entrada, para compartir o como plato único. Este producto de Emile Henry esta hecho en Francia y ofrece una garantía de diez años.",
  instructions: "Lavar a mano y secar inmediatamente después de usar.",
  isDisable: false,
  releasedAt: "2024-01-01T00:00:00Z",
  createdAt: "2024-01-01T00:00:00Z",
  updatedAt: "2024-01-01T00:00:00Z",
  deletedAt: null,
  brandId: 1,
  categories: [],
  labels: [],
  cart: [],
  reviews: [],
};

const Detail = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(productData.image); // Para manejar la imagen seleccionada

  // Cambiar la imagen principal por la seleccionada en la galería
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleAddToCart = () => {
    alert(`${quantity} ${productData.name} added to the cart!`);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <>
      <Nav />
      <div className="container mx-auto p-8 font-custom mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-24">
          {/* Imagen del producto ajustada */}
          <div className="col-span-1 flex">
            {/* Galería de imágenes */}
            <div className="flex flex-col space-y-4 mr-4">
              {productData.gallery.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index}`}
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer border-2 border-gray-300 hover:border-gray-500 transition duration-300"
                  onClick={() => handleImageClick(image)}
                />
              ))}
              {selectedImage === productData.image ? (
                <></>
              ) : (
                <img
                  src={productData.image}
                  alt={productData.name}
                  onClick={() => handleImageClick(productData.image)}
                  className="w-20 h-20 object-cover rounded-lg cursor-pointer border-2 border-gray-300 hover:border-gray-500 transition duration-300"
                />
              )}
            </div>

            <img
              src={selectedImage || productData.image} // Mostrar imagen seleccionada o la principal
              alt={productData.name}
              className="w-full h-auto object-contain max-h-96 rounded-lg shadow-md"
            />
          </div>

          {/* Información del producto ajustada */}
          <div className="col-span-1 p-4 flex flex-col justify-start">
            <div className="justify-start">
              <h1 className="text-etique font-bold">{productData.name}</h1>
              <p className="text-grisOsc my-6">
                {productData.shortDescription}
              </p>
            </div>
            <div>{productData.variations.map(s => 
              <select name={s} id="x"></select>)}
            </div>
            <div className="">
              <div className="flex justify-center items-center">
                <label
                  htmlFor="quantity"
                  className="text-sm text-gray-600 mr-2"
                >
                  Cantidad:
                </label>
                <input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="border border-grisOsc p-2 w-16 h-10"
                />
                <button
                  onClick={handleAddToCart}
                  className="bg-grisOsc text-white px-4 py-2 hover:bg-gris transition duration-300 w-full md:w-auto"
                >
                  Agregar al carrito
                </button>
              </div>
              <p className="text-etique font-bold text-grisOsc my-6">
                ${productData.price.toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* Descripción larga del producto */}
        <div className="mx-24 size-etique flex flex-col justify-start items-center">
          <div className="text-grisOsc text-etique my-12">
            Descripcion larga
          </div>
          <div className="text-grisOsc text-etiqueta">
            {productData.longDescription}
          </div>
        </div>

        {/* Opiniones o reseñas del producto */}
        <div className="mx-24  flex flex-col justify-start items-center">
          <h2 className="text-grisOsc text-etique my-12">
            Opiniones de clientes
          </h2>
          <div className="flex items-center mb-4">
            <span className="text-yellow-500">★★★★☆</span>
            <p className="ml-2 text-grisOsc text-etiqueta">(120 opiniones)</p>
          </div>
          <p className="text-grisOsc text-etiqueta">
            "¡Producto increíble! La calidad es fantástica y llegó a tiempo."
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Detail;
