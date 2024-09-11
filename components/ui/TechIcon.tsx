import Image from "next/image";

export const TechIcon = ({ component }: { component: string }) => {
  
  return (
    <>
      <Image width={200} height={200} src={component} alt={component} className="size-10"/>

    </>
  );
};
