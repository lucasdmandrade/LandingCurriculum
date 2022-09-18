import React, { createRef, useEffect } from "react";
import DivisorComponent from "../../../components/DivisorComponent";
import {
  AcademyComplement,
  AcademyDescription,
  Container,
  ContainerTitle,
  ContainerTitleDescription,
  ContentTitle,
  ExperienceComplement,
  ExperienceContainer,
  ExperienceContainerDescritiveText,
  ExperienceContainerResumeText,
  ExperienceDescription,
  ExperienceTitle,
  Scroller,
  ScrollerButton,
  ScrollerContainer,
} from "./styles";
import rigthArrow from "../../../assets/rigthArrow.svg";
import leftArrow from "../../../assets/leftArrow.svg";

const HomeContent = () => {
  const Q2Ref: React.RefObject<HTMLButtonElement> = createRef();
  const biodocRef: React.RefObject<HTMLButtonElement> = createRef();

  const SliderScrollToBiodocStep = () => {
    biodocRef.current?.scrollIntoView({ block: "nearest" });
  };

  const SliderScrollToQ2Step = () => {
    Q2Ref.current?.scrollIntoView({ block: "nearest" });
  };

  const SliderScrollNext = () => {
    SliderScrollToBiodocStep();
  };

  const SliderScrollPrevious = () => {
    SliderScrollToQ2Step();
  };

  const SliderLoop = (stop?: boolean) => {
    if (!stop) {
      const loop = setInterval(() => {
        SliderScrollToBiodocStep();
        setTimeout(() => {
          SliderScrollToQ2Step();
        }, 4000);
      }, 8000);
    }
  };

  useEffect(() => {
    SliderLoop();
  }, []);

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

      <ScrollerContainer>
        <ScrollerButton onClick={SliderScrollPrevious}>
          <img src={leftArrow} alt="rigth arrow" />
        </ScrollerButton>
        <Scroller>
          <ExperienceContainer
            ref={Q2Ref}
            onClick={() => {
              window.location.href =
                "https://play.google.com/store/apps/details?id=br.com.quero2pay.q2bank";
            }}
          >
            <ExperienceContainerResumeText>
              <ExperienceTitle>Quero2 Bank</ExperienceTitle>
              <ExperienceDescription>Mobile developer</ExperienceDescription>
              <ExperienceComplement>
                Abril de 2022 - Present (5 meses)
              </ExperienceComplement>
              <ExperienceComplement isSmokly>
                Franca, São Paulo, Brazil
              </ExperienceComplement>
            </ExperienceContainerResumeText>
            <ExperienceContainerDescritiveText>
              <ExperienceComplement>
                {" "}
                Trabalhei no desenvolvimento do aplicativo Q2 Bank, um banco
                digital voltado para os credenciados da Q2 terem maior controle
                de suas POS. Exercendo as atividades de desenvolvimento do front
                end, deploy, criação de testes automatizados, criação de testes
                end to end.
              </ExperienceComplement>
            </ExperienceContainerDescritiveText>
          </ExperienceContainer>

          <ExperienceContainer
            ref={biodocRef}
            onClick={() => {
              window.location.href = "https://biodoc.com.br/";
            }}
          >
            <ExperienceContainerResumeText>
              <ExperienceTitle>CloudMed Tecnologia</ExperienceTitle>
              <ExperienceDescription>Full Stack Engineer</ExperienceDescription>
              <ExperienceComplement>
                Outubro de 2021 - maio de 2022 (8 meses)
              </ExperienceComplement>
              <ExperienceComplement isSmokly>
                Franca, São Paulo, Brasil
              </ExperienceComplement>
            </ExperienceContainerResumeText>
            <ExperienceContainerDescritiveText>
              <ExperienceComplement>
                {" "}
                Atuei no desenvolvimento da plataforma de compras da Unimed
                realizando as atividades de desenvolvimento do front end,
                criação de testes automatizados, correção de bugs no back end,
                deploy e manutenção do projeto legado. Finalizada a plataforma
                atuei no desenvolvimento de um sistema antifraude com
                reconhecimento facial o desenvolvimento do front end e deploy.
              </ExperienceComplement>
            </ExperienceContainerDescritiveText>
          </ExperienceContainer>
        </Scroller>
        <ScrollerButton onClick={SliderScrollNext}>
          <img src={rigthArrow} alt="rigth arrow" />
        </ScrollerButton>
      </ScrollerContainer>

      <DivisorComponent width="100px" color="#eeeeee8d" />

      <ContentTitle>Formação acadêmica</ContentTitle>
      <AcademyDescription>
        Fatec Franca - Faculdade de Tecnologia "Dr. Thomaz Novelino"
      </AcademyDescription>
      <AcademyComplement>
        Curso Superior de Tecnologia (CST), Análise e desenvolvimento de
        sistemas · (julho de 2019)
      </AcademyComplement>
    </Container>
  );
};

export default HomeContent;
