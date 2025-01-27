import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
          Metaverse Realty
        <span className="bg-gradient-to-r from-sky-500 to-yellow-300 text-transparent bg-clip-text">
          {" "}
          para las personas de hoy!
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
      Nuestras propiedades no solo son bienes raíces, son una inversión en el futuro. 
      El multiverso es un mercado en constante expansión, y poseer un inmueble en él es una muestra de visión y sofisticación. 
      Además, te ofrecemos una gama completa de servicios, desde la personalización de tu propiedad hasta la gestión de alquileres interdimensionales
      !</p>
      
      <div className="flex justify-center my-10">
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
