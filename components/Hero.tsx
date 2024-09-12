/* eslint-disable tailwindcss/no-custom-classname */
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import ThemeToggle from "./ui/ThemeToggle";
import { BackgroundBeams } from "./ui/BackgroundBeams";

const Hero = () => {
  return (
    <section id="hero">
      <div className="h-screen">
        <div>
          <Spotlight
            className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
            fill="white"
          />
          <Spotlight
            className="left-full top-10 h-[80vh] w-[50vw]"
            fill="#00FF99"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center antialiased">
          <BackgroundBeams className="size-[1100px] md:size-full"/>
          {/* Radial gradient for the container to give a faded look */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_100%,black)] dark:bg-black-100" />
        </div>

        <div className="relative z-10 my-auto flex size-full items-center justify-center">
          <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
            {/* Arrumar botão de darkmode
          <ThemeToggle /> */}

            <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
              Portfólio Desenvolvedor Front-end
            </h2>
            <TextGenerateEffect
              className="max-w-[24ch] text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Olá! Sou Gabriel Brasil"
            />
            <p className="mt-2 max-w-[50ch] text-center text-xs md:mt-6 md:max-w-[60ch] md:text-sm md:tracking-wider lg:text-lg">
              Dev Front-end pronto para  transformar ideias em interfaces atraentes e funcionais
            </p>
            <p className="md:mb-26 mb-10 mt-2 text-center text-sm text-white-100 md:mt-6 md:text-lg md:tracking-wider lg:text-2xl">
              Seja bem-vindo ao meu portfólio! 
            </p>
            <a href="#about">
              <MagicButton
                title="Veja meu trabalho"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
