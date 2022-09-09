import React from "react";
import {
  AcademyComplement,
  AcademyDescription,
  Container,
  ContainerTitle,
  ContainerTitleDescription,
  ContentTitle,
  Divisor,
  ExperienceComplement,
  ExperienceContainer,
  ExperienceContainerDescritiveText,
  ExperienceContainerResumeText,
  ExperienceDescription,
  ExperienceTitle,
} from "./styles";

const HomeContent = () => {
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
        Alinhado a isso, minhas competências incluem: React.js, React Native e
        JavaScript. Além disso, possuo experiência com Mobile Developer (5 meses
        - presente) e Full Stack Engineer (8 meses).
      </ContainerTitleDescription>
      <ContainerTitleDescription haveMarginTop>
        “There is no single development, in either technology or management
        technique, which by itself promises even one order-of magnitude
        improvement within a decade in productivity, in reliability, in
        simplicity” — Frederick P. Brooks, Jr.
      </ContainerTitleDescription>

      <Divisor />

      <ContentTitle>Experiência</ContentTitle>

      <ExperienceContainer
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
      </ExperienceContainer>

      <ExperienceContainer
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
            Meus trabalhos consistiam...
          </ExperienceComplement>
        </ExperienceContainerDescritiveText>
        <ExperienceContainerDescritiveText></ExperienceContainerDescritiveText>
      </ExperienceContainer>

      <Divisor />

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
