import React from "react";
import { projects } from "@/data";
import { CardBody, CardContainer, CardItem } from "./ui/3dCard";
import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa";
import { AnimatedTooltip } from "./ui/animatedTooltip";

const RecentProjects = () => {
  return (
    <section id="projects">
      <div className="py-20">
        <h1 className="heading">
          Uma mostra dos meus{" "}
          <span className="text-purple">trabalhos recentes</span>
        </h1>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-y-8 gap-x-24 p-4">
          {projects.map(({ id, title, description, img, iconList, link }) => (
            <div
              key={id}
              className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            >
              <CardContainer className="relative flex items-center justify-center">
                <CardBody className="hover:shadow-2xl size-full rounded-xl border  border-white/[0.2] bg-[#10132E] p-5 hover:shadow-indigo-500/[0.1] lg:rounded-3xl">
                  <CardItem
                    translateZ="100"
                    className="sm:w-[570px] w-[80vw] sm:h-[20rem] h-[10rem] mb-10 relative"
                  >
                    <a href={link} target="_blank">
                      <div className="relative w-full h-full overflow-hidden rounded-xl lg:rounded-3xl bg-[#13162d]">
                        <Image
                          src={img}
                          height="1000"
                          width="1000"
                          className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
                          alt="thumbnail"
                        />
                      </div>
                    </a>
                  </CardItem>
                  <CardItem
                    translateZ="50"
                    className="line-clamp-1 text-base font-bold md:text-lg lg:text-xl"
                  >
                    {title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="line-clamp-2 text-xs font-light lg:text-sm lg:font-normal"
                    style={{
                      color: "#BEC1DD",
                      margin: "1vh 0",
                    }}
                  >
                    {description}
                  </CardItem>
                  <div className="flex items-center justify-between mt-7 mb-3">
                    <CardItem translateZ={60}>
                      <div className="flex items-center">
                        <AnimatedTooltip items={iconList} />
                      </div>
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={link}
                      target="_blank"
                    >
                      <div className="flex justify-center items-center">
                        <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                          Ir para o Projeto
                        </p>
                        <FaLocationArrow className="ms-3" color="#CBACF9" />
                      </div>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
