import React, { createRef, useCallback, useEffect, useState } from "react";
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
  ScrollerPages,
  ScrollerPaginationContainer,
} from "./styles";
import rigthArrow from "../../../assets/rigthArrow.svg";
import leftArrow from "../../../assets/leftArrow.svg";
import experiences from "./ExperiencesSliderContents";
import { IExperience } from "./ExperiencesSliderContents/types";

const HomeContent = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  useEffect(() => {
    console.log("sliderIndex", sliderIndex);
  }, [sliderIndex]);

  const SliderScrollNext = useCallback(() => {
    if (sliderIndex + 1 < experiences.length) {
      experiences[sliderIndex + 1].ref.current?.scrollIntoView({
        block: "nearest",
      });
      setSliderIndex(sliderIndex + 1);
    }
  }, [sliderIndex]);

  const SliderScrollPrevious = () => {
    if (sliderIndex > 0) {
      experiences[sliderIndex - 1].ref.current?.scrollIntoView({
        block: "nearest",
      });
      setSliderIndex(sliderIndex - 1);
    }
  };

  const SliderScrollFirst = () => {
    experiences[0].ref.current?.scrollIntoView({
      block: "nearest",
    });
    setSliderIndex(0);
  };

  useEffect(() => {
    setTimeout(() => {
      if (sliderIndex < experiences.length - 1) {
        SliderScrollNext();
      } else {
        SliderScrollFirst();
      }
    }, 2000);
  }, [SliderScrollNext, sliderIndex]);

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
        </Scroller>

        <ScrollerButton onClick={SliderScrollNext}>
          <img src={rigthArrow} alt="rigth arrow" />
        </ScrollerButton>
      </ScrollerContainer>
      <ScrollerPaginationContainer>
        {experiences.map((experience: IExperience, index) => (
          <>
            <ScrollerPages
              onClick={() => {
                experience.ref.current?.scrollIntoView({ block: "nearest" });
                setSliderIndex(index);
              }}
              isActual={index === sliderIndex}
            >
              {index + 1}
            </ScrollerPages>
            {index === experiences.length - 1 || (
              <DivisorComponent width="15px" color="#eeeeeecf" removeMargin />
            )}
          </>
        ))}
      </ScrollerPaginationContainer>

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
