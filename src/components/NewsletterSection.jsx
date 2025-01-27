import React, { useState } from "react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes enviar el correo electrónico a una API o manejarlo como desees
    console.log("Correo electrónico enviado:", email);
    alert("¡Gracias por suscribirte!");
    setEmail(""); // Limpiar el campo después de enviar
  };

  return (
    <div className="mt-20 bg-neutral-900 py-12">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Únete a nuestro boletín informativo
        </h2>
        <p className="text-neutral-400 mb-8">
          Mantente al día con las últimas características, actualizaciones y noticias sobre el metaverso.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Ingresa tu correo electrónico"
            className="w-full sm:w-64 px-4 py-3 rounded-lg bg-neutral-800 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition duration-200"
          >
            Suscribirse
          </button>
        </form>
        <p className="text-neutral-500 text-sm mt-4">
          Al suscribirte, aceptas nuestra{" "}
          <a href="#" className="text-orange-500 hover:underline">
            Política de Privacidad
          </a>{" "}
          y consientes recibir actualizaciones de nuestro equipo.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSection;