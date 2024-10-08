import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer id="contact" className="relative w-full overflow-hidden py-20">
      <div className="absolute -bottom-72 left-0 top-0 w-full">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="size-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Preparado para transformar sua{" "}
          <span className="text-neongreen">presença online</span> ou agregar valor
          à sua equipe?
        </h1>
        <p className="my-5 text-center text-white-200 md:mt-10">
          Entre em contato para que possamos planejar juntos o sucesso do seu
          novo projeto.
        </p>
        <a href="mailto:gabriel.br1994@gmail.com">
          <MagicButton
            title="Entrar em contato"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="mt-16 flex flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright © 2024 <span className="text-neongreen-hover">Gabriel BR</span>
        </p>
        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((profile) => (
            <a href={profile.link} key={profile.id} target="_blank">
              <div className="flex size-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg hover:saturate-150">
                <img
                  src={profile.img}
                  alt={profile.id}
                  width={20}
                  height={20}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
