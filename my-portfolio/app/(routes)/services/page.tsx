import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";
import "swiper/css";
import "swiper/css/pagination";
import { FaWhatsapp } from "react-icons/fa";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <div className="grid items-center justify-center h-screen max-w-5xl gap-6 mx-auto md:grid-cols-2">
        <div className="max-w-[450px] mt-20 md:mt-0">
          <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
            Mis <span className="font-bold text-secondary"> servicios.</span>
          </h1>
          <p className="mb-3 text-xl text-gray-300">
            Ofrezco servicios de desarrollo web frontend especializados en la
            creación de sitios web y aplicaciones atractivas y funcionales.
            Utilizando las últimas tecnologías, diseño interfaces de usuario
            intuitivas y responsivas que reflejan la identidad de marca de mis
            clientes y mejoran su presencia en línea.
          </p>
          <a
            href="https://wa.me/5545998621706"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 w-[190px] py-2 flex flex-row rounded-lg bg-secondary hover:bg-secondary/65"
          >
            <FaWhatsapp className="text-xl mr-1" />
            Contacta conmigo
          </a>
        </div>

        {/* SLIDER */}
        <div>
          <SliderServices />
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
