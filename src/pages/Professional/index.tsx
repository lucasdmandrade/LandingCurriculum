import React from "react";
import MainContainer from "../../components/MainContainer";
import {
  Container,
  ImageContainer,
  ImageContent,
  TextContainer,
} from "./styles";
import Q2bank from "../../assets/images/q2bank.png";
import CloudMed from "../../assets/images/cloudmed.png";

const Professional = () => {
  return (
    <MainContainer>
      <Container>
        <ImageContainer>
          <ImageContent src={Q2bank} alt="Imagem do app q2bank" />
        </ImageContainer>
        <TextContainer>
          <h1>Teste</h1>
        </TextContainer>
      </Container>
      <Container>
        <ImageContainer>
          <ImageContent src={CloudMed} alt="Imagem do app q2bank" />
        </ImageContainer>
        <TextContainer>
          <h1>Teste</h1>
        </TextContainer>
      </Container>
      <Container>
        <ImageContainer>
          <ImageContent src={Q2bank} alt="Imagem do app q2bank" />
        </ImageContainer>
        <TextContainer>
          <h1>Teste</h1>
        </TextContainer>
      </Container>
    </MainContainer>
  );
};

export default Professional;
