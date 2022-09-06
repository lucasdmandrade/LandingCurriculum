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
      <ContainerTitleDescription haveMarginTop>
        “There is no single development, in either technology or management
        technique, which by itself promises even one order-of magnitude
        improvement within a decade in productivity, in reliability, in
        simplicity” — Frederick P. Brooks, Jr.
      </ContainerTitleDescription>

      <Divisor />

      <ContentTitle>Experiência</ContentTitle>

      <ExperienceContainer>
        <ExperienceTitle>Quero2 Bank</ExperienceTitle>
        <ExperienceDescription>Mobile developer</ExperienceDescription>
        <ExperienceComplement>
          Abril de 2022 - Present (5 meses)
        </ExperienceComplement>
        <ExperienceComplement isSmokly>
          Franca, São Paulo, Brazil
        </ExperienceComplement>
      </ExperienceContainer>

      <ExperienceContainer>
        <ExperienceTitle>CloudMed Tecnologia</ExperienceTitle>
        <ExperienceDescription>Full Stack Engineer</ExperienceDescription>
        <ExperienceComplement>
          Outubro de 2021 - maio de 2022 (8 meses)
        </ExperienceComplement>
        <ExperienceComplement isSmokly>
          Franca, São Paulo, Brasil
        </ExperienceComplement>
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
