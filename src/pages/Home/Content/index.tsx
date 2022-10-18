import React, {
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import DivisorComponent from "../../../components/DivisorComponent";
import {
  AcademyComplement,
  AcademyDescription,
  Container,
  ContainerTitle,
  ContainerTitleDescription,
  ContainerTitleDescriptionGradient,
  ContentTitle,
  ExperienceComplement,
  ExperienceContainer,
  ExperienceContainerDescritiveText,
  ExperienceContainerResumeText,
  ExperienceDescription,
  ExperienceTitle,
  Scroller,
  ScrollerButton,
  ScrollerButtonImg,
  ScrollerContainer,
  ScrollerLockButton,
  ScrollerPages,
  ScrollerPaginationContainer,
} from "./styles";
import rigthArrow from "../../../assets/rigthArrow.svg";
import leftArrow from "../../../assets/leftArrow.svg";
import padlockClosed from "../../../assets/padlockClosed.svg";
import padlockOpen from "../../../assets/padlockOpen.svg";

import experiences from "./ExperiencesSliderContents";
import { IExperience } from "./ExperiencesSliderContents/types";
import Carousel from "nuka-carousel";

const HomeContent = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [isLoopPaused, setIsLoopPaused] = useState(false);
  const [callLoop, setCallLoop] = useState(false);
  const loopTimer = useRef(0);

  return (
    <Container>
      <ContainerTitle>Lucas D'Elia Miranda de Andrade</ContainerTitle>
      <ContainerTitleDescription>
        Front-end developer at Q2 Bank
      </ContainerTitleDescription>

      <ContainerTitleDescription isSmokly>
        Franca, São Paulo, Brasil
      </ContainerTitleDescription>

      <ContentTitle>Resumo</ContentTitle>

      <ContainerTitleDescription>
        Atualmente, inserido na área da programação, sou movido pelos estímulos
        dos projetos diários e pela busca de soluções únicas e inusitadas. Isso
        se deve, pois, na área de desenvolvimento de softwares não existe uma
        única resposta para as situações ou uma única forma de atingir seus
        objetivos. Logo, as várias possibilidades me motivam à dedicação às
        minhas metas, sendo que o desafio renova minhas forças para o
        conhecimento constante. Dessa forma, busco confeccionar meus projetos de
        maneira eficiente, por meio de métodos pensados estrategicamente.
        Alinhado a isso, minhas competências incluem: Desenvolvimento front-end,
        back-end e mobile. Usando as stacks: React.js, React Native e
        JavaScript.
      </ContainerTitleDescription>
      <ContainerTitleDescription haveMarginTop>
        “There is no single development, in either technology or management
        technique, which by itself promises even one order-of magnitude
        improvement within a decade in productivity, in reliability, in
        simplicity” — Frederick P. Brooks, Jr.
      </ContainerTitleDescription>

      <DivisorComponent width="100px" color="#eeeeee8d" />

      <ContentTitle>Experiência</ContentTitle>

      <Carousel
        defaultControlsConfig={{
          nextButtonStyle: { display: "none" },
          prevButtonStyle: { display: "none" },
          pagingDotsStyle: { marginTop: "15px" },
        }}
        style={{ padding: "0 30px" }}
      >
        {experiences.map((experience: IExperience) => (
          <ExperienceContainer
            ref={experience.ref}
            onClick={() => {
              window.location.href = experience.link;
            }}
          >
            <ExperienceContainerResumeText>
              <ExperienceTitle>{experience.title}</ExperienceTitle>
              <ExperienceDescription>
                {experience.description}
              </ExperienceDescription>
              <ExperienceComplement>
                {experience.complement}
              </ExperienceComplement>
              <ExperienceComplement isSmokly>
                {experience.region}
              </ExperienceComplement>
            </ExperienceContainerResumeText>
            <ExperienceContainerDescritiveText>
              <ExperienceComplement>
                {experience.descritiveText}
              </ExperienceComplement>
            </ExperienceContainerDescritiveText>
          </ExperienceContainer>
        ))}
      </Carousel>

      <DivisorComponent width="100px" color="#eeeeee8d" />

      <ContentTitle>Formação acadêmica</ContentTitle>
      <AcademyDescription>
        Fatec Franca - Faculdade de Tecnologia "Dr. Thomaz Novelino"
      </AcademyDescription>
      <AcademyComplement>
        Curso Superior de Tecnologia (CST), Análise e desenvolvimento de
        sistemas · (julho de 2019)
      </AcademyComplement>

      <DivisorComponent width="100px" color="#eeeeee8d" />
      <ContentTitle>Meu começo na programação</ContentTitle>
      <ContainerTitleDescriptionGradient>
        “There is no single development, in either technology or management
        technique, which by itself promises even one order-of-magnitude
        improvement within a decade in productivity, in reliability, in
        simplicity” — Frederick P. Brooks, Jr. {<br />} Esta frase representa a
        minha visão sobre programação, pois não existe uma única solução para os
        problemas ou um único método para os objetivos. E, pensando nos
        objetivos de um jovem, aos seus 18 anos, a escolha profissional era a
        minha meta. Embora não tendo tanta certeza de tais escolhas, a área de
        programação sempre fez parte de minha história. Cresci em meio a
        dispositivos, aparatos tecnológicos e adaptações para a automação.
        Projetos sobre programação foram cenas de minha infância. E, estando em
        formação, na área de desenvolvimento, projetos diários surgem como
        desafios novos, buscando soluções únicas e encontrando caminhos
        inusitados cujas soluções nem sempre podem ser previstas. Isso é o que
        me move nessa área, pois o diferente leva o desenvolvedor a mergulhar de
        cabeça e não existe cansaço ou monotonia. O desafio renova as forças
        para o conhecimento constante. Também encaro a mudança como algo
        necessário para o crescimento humano e profissional e entendo que o
        esforço constante e diário é o caminho para a permanência. Sou simplista
        e interativo. Gosto de encarar cada projeto como um desafio novo, pois
        sempre quero resolvê-los da forma mais eficiente possível. Entendo que
        já existem caminhos pensados, mas a resolução por métodos mais eficazes
        deve ser uma estratégia no cotidiano do desenvolvedor, pois como
        simplista e interativo, gosto de escolher pelo viés da prática agregando
        visões do outro. Desse modo, prefiro, normalmente, trabalhar em grupos.
      </ContainerTitleDescriptionGradient>
    </Container>
  );
};

export default HomeContent;
