import { createRef } from "react";
import { IExperience } from "./types";

const biodocRef: React.RefObject<HTMLButtonElement> = createRef();
const Q2Ref: React.RefObject<HTMLButtonElement> = createRef();
const experiences: IExperience[] = [
  {
    ref: Q2Ref,
    link: "https://play.google.com/store/apps/details?id=br.com.quero2pay.q2bank",
    title: "Quero2 Bank",
    description: "Mobile developer",
    complement: "Abril de 2022 - Present (8 meses)",
    region: "Franca, São Paulo, Brasil",
    descritiveText:
      "Trabalhei no desenvolvimento do aplicativo Q2 Bank, um banco digital voltado para os credenciados da Q2 terem maior controle das suas POS. Exercendo as atividades de desenvolvimento do frontend, deploy, criação de testes automatizados e criação de testes end to end.",
  },
  {
    ref: biodocRef,
    link: "https://biodoc.com.br/",
    title: "CloudMed Tecnologia",
    description: "Full Stack Engineer",
    complement: "Outubro de 2021 - maio de 2022 (8 meses)",
    region: "Franca, São Paulo, Brasil",
    descritiveText:
      "Atuei no desenvolvimento da plataforma de compras da Unimed realizando as atividades de desenvolvimento do front end, criação de testes automatizados, correção de bugs no back end, atuei no desenvolvimento de um sistema antifraude com reconhecimento facial o desenvolvimento do front end e deploy.",
  },
];

export default experiences;
