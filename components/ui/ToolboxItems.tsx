import React, { Fragment } from "react";
import { TechIcon } from "./TechIcon";
import { twMerge } from "tailwind-merge";

const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string;
    src: string;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "-mx-5 flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] lg:-mx-10",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none gap-6 py-0.5 pr-6 antialiased ",
          itemsWrapperClassName
        )}
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {items.map((item) => (
              <div
                key={item.title}
                className="inline-flex items-center gap-4 rounded-lg px-3 py-2 opacity-60 outline outline-2 outline-white/10 hover:opacity-100 hover:outline-neongreen/50 cursor-default"
              >
                <TechIcon component={item.src} />
                <span>{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;
