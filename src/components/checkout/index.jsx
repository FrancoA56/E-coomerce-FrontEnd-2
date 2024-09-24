import React, { useState } from "react";
import Nav from "../nav";
import Footer from "../footer";

const Checkout = () => {
  const [shippingDetails, setShippingDetails] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    cardHolderName: "",
  });

  const [products] = useState([
    { id: 1, name: "Producto 1", price: 10.0, quantity: 2 },
    { id: 2, name: "Producto 2", price: 15.5, quantity: 1 },
  ]);

  const handleShippingChange = (e) => {
    setShippingDetails({
      ...shippingDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handlePaymentChange = (e) => {
    setPaymentDetails({
      ...paymentDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes integrar el envío de datos a tu backend o pasarela de pago.
    console.log("Shipping Details:", shippingDetails);
    console.log("Payment Details:", paymentDetails);
  };

  const getTotalPrice = () => {
    return products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  };

  return (
    <>
      <Nav />
      <div className="checkout-container p-8">
        <h2 className="text-titulo font-custom mb-6">Checkout</h2>
        <i class="fa-solid fa-shop"></i>

        {/* Sección de Productos */}
        <div className="grid grid-cols-10 mx-24 font-custom ">
          <div className="order-summary mb-6 col-span-6 ">
            <h3 className="text-xl mb-4">Order Summary</h3>
            {products.map((product) => (
              <div
                key={product.id}
                className="product-item mb-2 flex justify-between"
              >
                <span>
                  {product.name} x {product.quantity}
                </span>
                <span>${product.price.toFixed(2)}</span>
              </div>
            ))}
            <div className="total mt-4 text-lg font-bold">
              SubTotal: ${getTotalPrice().toFixed(2)}
            </div>
          </div>
          <div className="col-span-1"></div>
          {/* Sección de Envío */}
          <form onSubmit={handleSubmit} className="col-span-3 font-custom">
            <div className="shipping-info mb-6">
              <h3 className="text-xl mb-4">Shipping Information</h3>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={shippingDetails.name}
                onChange={handleShippingChange}
                className="border p-2 w-full mb-4 bg-crema"
                required
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={shippingDetails.address}
                onChange={handleShippingChange}
                className="border p-2 w-full mb-4 bg-crema"
                required
              />
              <div className="flex space-x-4 mb-4">
                <input
                  type="text"
                  name="city"
                  bg-crema
                  placeholder="City"
                  value={shippingDetails.city}
                  onChange={handleShippingChange}
                  className="border p-2 w-1/2  bg-crema"
                  required
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={shippingDetails.state}
                  onChange={handleShippingChange}
                  className="border p-2 w-1/2  bg-crema"
                  required
                />
              </div>
              <div className="flex space-x-4 mb-4">
                <input
                  type="text"
                  name="zip"
                  placeholder="Zip Code"
                  value={shippingDetails.zip}
                  onChange={handleShippingChange}
                  className="border p-2 w-1/2  bg-crema"
                  required
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={shippingDetails.country}
                  onChange={handleShippingChange}
                  className="border p-2 w-1/2  bg-crema"
                  required
                />
              </div>
            </div>

            {/* Sección de Pago */}
            <div className="payment-info mb-6">
              <h3 className="text-xl mb-4">Payment Method</h3>
              <div className="grid grid-cols-3 justify-items-center">
                <a>
                  <img
                    className="w-20 h-auto"
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </a>
                <a>
                  <img
                    className="w-20 h-auto"
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </a>
                <a>
                  <img
                    className="w-20 h-auto"
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </a>
              </div>
            </div>

            {/* Botón de Confirmar Pedido */}
            <button
              type="submit"
              className="bg-grisOsc text-white px-4 py-2 hover:bg-gris font-custom"
            >
              Confirmar Pedido
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
