import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-6 py-12 space-y-20">
      {/* Sección de encabezado con imagen de fondo */}
      <div className="relative bg-cover bg-center h-[400px] bg-[url('https://source.unsplash.com/1600x900/?technology')]">
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-5xl font-bold text-white">
            About NovaTech Solutions
          </h1>
        </div>
      </div>

      {/* Sección Historia */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Founded in 2010, **NovaTech Solutions** began as a small startup with
            a vision to revolutionize the tech industry. Over the past decade, we
            have grown from a handful of passionate developers to a global leader
            in providing innovative software solutions. Our commitment to quality,
            integrity, and customer satisfaction has driven us to develop
            groundbreaking products used by millions worldwide.
          </p>
        </div>
        <div className="hidden md:block">
          <img
            src="https://source.unsplash.com/800x600/?team,technology"
            alt="Our team working"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Sección Misión y Visión */}
      <div className="grid md:grid-cols-2 gap-8 bg-gray-50 p-8 rounded-lg shadow-md">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            At **NovaTech Solutions**, our mission is to create technology that
            empowers businesses and individuals to achieve more. We strive to
            build products that are intuitive, reliable, and scalable, helping our
            clients transform challenges into opportunities.
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We envision a world where technology seamlessly integrates with every
            aspect of life, making processes simpler, more efficient, and more
            meaningful.
          </p>
        </div>
      </div>

      {/* Sección Valores */}
      <div className="space-y-8">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg text-center transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
            <p className="text-gray-600">
              We constantly strive to push the boundaries of what's possible by
              embracing creativity and thinking outside the box.
            </p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg text-center transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer Focus</h3>
            <p className="text-gray-600">
              Our customers are at the heart of everything we do. Their success
              is our success, and we work tirelessly to exceed their
              expectations.
            </p>
          </div>

          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg text-center transition-transform hover:scale-105">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Integrity</h3>
            <p className="text-gray-600">
              We conduct business with honesty, transparency, and accountability,
              fostering trust with our clients and stakeholders.
            </p>
          </div>
        </div>
      </div>

      {/* Sección del equipo */}
      <div className="space-y-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Meet the Team</h2>
        <p className="text-gray-600 text-lg">
          Behind every great product is a team of talented and passionate
          individuals. At **NovaTech Solutions**, our team is our most valuable
          asset.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
          <div className="space-y-2">
            <img
              src="https://source.unsplash.com/200x200/?person,tech"
              alt="Team member"
              className="rounded-full shadow-md"
            />
            <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
            <p className="text-sm text-gray-500">CEO & Founder</p>
          </div>
          <div className="space-y-2">
            <img
              src="https://source.unsplash.com/200x200/?woman,tech"
              alt="Team member"
              className="rounded-full shadow-md"
            />
            <h3 className="text-lg font-semibold text-gray-800">Jane Smith</h3>
            <p className="text-sm text-gray-500">CTO</p>
          </div>
          <div className="space-y-2">
            <img
              src="https://source.unsplash.com/200x200/?developer"
              alt="Team member"
              className="rounded-full shadow-md"
            />
            <h3 className="text-lg font-semibold text-gray-800">Carlos Ruiz</h3>
            <p className="text-sm text-gray-500">Lead Developer</p>
          </div>
          <div className="space-y-2">
            <img
              src="https://source.unsplash.com/200x200/?business,person"
              alt="Team member"
              className="rounded-full shadow-md"
            />
            <h3 className="text-lg font-semibold text-gray-800">Emily Park</h3>
            <p className="text-sm text-gray-500">Head of Marketing</p>
          </div>
        </div>
      </div>

      {/* Sección de llamada a la acción */}
      <div className="bg-blue-600 text-white py-12 text-center rounded-lg shadow-md mt-16">
        <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
        <p className="text-lg mb-8">
          Let’s take your business to the next level. Contact us today to find
          out how we can help you with your next big project!
        </p>
        <a
          href="/contact"
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition duration-300"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
};

export default About;
