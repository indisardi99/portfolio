"use client";
import { FaWhatsapp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 flex justify-center items-center h-full p-6 py-20 md:py-0 md:grid-cols-2">
        <div className="flex flex-col justify-center max-w-md">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
            Si puedes pensarlo, <br />
            <TypeAnimation
              sequence={[
                "puedes programarlo",
                1000,
                "puedes optimizarlo",
                1000,
                "puedes implementarlo",
                1000,
                "puedes desarrollarlo",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-secondary"
            />
          </h1>

          <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
            Como desarrollador frontend y creador de contenido, me dedico a
            combinar diseño y funcionalidad para crear experiencias digitales
            impactantes y accesibles.
          </p>

          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
            <a
              href="/portfolio"
              className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-md hover:shadow-white/50"
            >
              Ver proyectos
            </a>
            <a
              href="https://wa.me/5545998621706"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-md hover:shadow-secondary"
            >
              <p className="flex flex-row">
                <FaWhatsapp className="text-xl mr-1" />
                Contacta conmigo
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
