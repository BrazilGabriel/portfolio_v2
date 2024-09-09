import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <section id="testimonials">
      <div className="py-20">
        <h1 className="heading">
          Algumas palavras de alguns
          <span className="text-purple"> clientes satisfeitos</span>
        </h1>
        <div className="mt-10 flex flex-col items-center max-lg:mt-10">
            <InfiniteMovingCards
              items={testimonials}
              direction="left"
              speed="slow"
            />
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10">
                {companies.map(({id, img, name, nameImg})=> (
                    <div key={id} className="flex md:max-w-60 max-w-30 gap-2">
                        <img 
                        src={img}
                        alt={name}
                        className="md:w-10 w-5"
                        />
                             <img 
                        src={nameImg}
                        alt={name}
                        className="md:w-24 w-20"
                        />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
