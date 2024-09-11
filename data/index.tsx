export {default as NextIcon } from '@/public/next.svg'


export const navItems = [
  { name: "Início", link: "#hero" },
  { name: "Sobre", link: "#about" },
  { name: "Projetos", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Contato", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Priorizo a colaboração do cliente, promovendo a comunicação aberta",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "size-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Sou muito flexível com fuso horário",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Minha tech stack",
    description: "Eu constantemente tento melhorar",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Entusiasta de design e apaixonado por tecnologia.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Atualmente fazendo um clone de site da apple",
    description: "O que estou a fazer",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Quer iniciar um projeto juntos?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/BrazilGabriel",
  },
  // {
  //   id: 2,
  //   img: "/insta.svg",
  //   link: "",
  // },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/gabriel-silva-brasil-1104a2120/",
  },
];

export const projects = [
  {
    id: 1,
    title: "OrçaFácil - Gerenciamento de Projetos",
    description:
      "Permite a criação, edição e exclusão de projetos. O mesmo conta com um orçamento, ao qual podem ser associados custos de serviços.",
    img: "/orcafacil_thumb.jpg",
    iconList: [
      { id: 1, name: "React.JS", image: "/re.svg" },
      { id: 2, name: "Render", image: "/render_logo.svg" },
      { id: 3, name: "TailwindCSS", image: "/tail.svg" },
      { id: 4, name: "Vercel", image: "/vercel_logo.svg" },
      { id: 5, name: "Vite", image: "/vite_logo.svg" },
    ],
    link: "https://orcafacil.vercel.app",
  },
  {
    id: 2,
    title: "Simpósio de Saúde - Landing page ",
    description:
      "Em parceria com a Secretaria de Informação e Saúde Digital do Ministério da Saúde (SEIDIGI/MS) realizei a criação do site para o 1º Simpósio Internacional Transformação Digital no SUS.",
    img: "/simposio_thumb.jpg",
    iconList: [
      { id: 1, name: "JavaScript", image: "/js_logo.svg" },
      { id: 2, name: "Vercel", image: "/vercel_logo.svg" },
      { id: 3, name: "Vite", image: "/vite_logo.svg" },
    ],
    link: "https://i-simposio-transformacao-digital-no-sus.vercel.app",
  },
  // {
  //   id: 3,
  //   title: "",
  //   description:
  //     "",
  //   img: "",
  //   iconList: [
  //     { id: 1, name: "React.JS", image: "/re.svg" },
  //     { id: 2, name: "TailwindCSS", image: "/tail.svg" },
  //     { id: 3, name: "TypeScript", image: "/ts.svg" },
  //     { id: 4, name: "Three.js", image: "/three.svg" },
  //   ],
  //   link: "",
  // },
  // {
  //   id: 4,
  //   title: "",
  //   description:
  //     "",
  //   img: "",
  //   iconList: [
  //     { id: 1, name: "Next.JS", image: "/next.svg" },
  //     { id: 2, name: "TailwindCSS", image: "/tail.svg" },
  //     { id: 3, name: "TypeScript", image: "/ts.svg" },
  //     { id: 4, name: "Three.js", image: "/three.svg" },
  //     { id: 5, name: "GSAP", image: "/gsap.svg" },
  //   ],

  //   link: "",
  // },
];

export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et urna sagittis, convallis tortor ac, sagittis turpis. Phasellus lectus turpis, luctus eget aliquam eget, lobortis nec urna. Suspendisse potenti. Vestibulum",
    name: "Zé Lourenço",
    title: "Diretor da Alpha Technologias",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et urna sagittis, convallis tortor ac, sagittis turpis. Phasellus lectus turpis, luctus eget aliquam eget, lobortis nec urna. Suspendisse potenti. Vestibulum",
    name: "Zé Lourenço",
    title: "Diretor da Alpha Technologias",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et urna sagittis, convallis tortor ac, sagittis turpis. Phasellus lectus turpis, luctus eget aliquam eget, lobortis nec urna. Suspendisse potenti. Vestibulum",
    name: "Zé Lourenço",
    title: "Diretor da Alpha Technologias",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et urna sagittis, convallis tortor ac, sagittis turpis. Phasellus lectus turpis, luctus eget aliquam eget, lobortis nec urna. Suspendisse potenti. Vestibulum",
    name: "Zé Lourenço",
    title: "Diretor da Alpha Technologias",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et urna sagittis, convallis tortor ac, sagittis turpis. Phasellus lectus turpis, luctus eget aliquam eget, lobortis nec urna. Suspendisse potenti. Vestibulum",
    name: "Zé Lourenço",
    title: "Diretor da Alpha Technologias",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web Designer",
    desc: "Fui responsável por criar a identidade visual da empresa, site e eventos, além de desenvolver elementos de interface para um ambiente virtual de aprendizado e conceber o site institucional utilizando WordPress e React.",
    className: "md:col-span-2",
    thumbnail: "/xp_1.svg",
  },
  {
    id: 2,
    title: "UX/UI Designer",
    desc: "Elaborei e executei projetos de PD&I (Samsung), sendo responsável pela criação de toda a interface de uma aplicação web e de um simulador em Realidade Virtual, participando ativamente desde a concepção, planejamento até o desenvolvimento de ambos.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/xp_2.svg",
  },
  {
    id: 3,
    title: "Dev Freelancer",
    desc: "Desenvolvi páginas web para diversos clientes, com destaque o Ministério da Saúde, abrangendo desde o planejamento inicial até a implementação e disponibilização ao público.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/xp_3.svg",
  },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const stack = [
  {
    title: "React.js",
    src: "/re.svg",
  },
  {
    title: "Next.js",
    src: "/next.svg",
  },
  {
    title: "TypeScript",
    src: "/ts.svg",
  },
  {
    title: "TailwindCSS",
    src: "/tail.svg",
  },
  {
    title: "Vite",
    src: "/vite_logo.svg",
  },
  {
    title: "GSAP",
    src: "/gsap.svg",
  },
  {
    title: "Framer",
    src: "/fm.svg",
  },
];
