import React from "react";
import MainContainer from "../../components/MainContainer";
import HomeContent from "./Content";
import SideBar from "./SideBar";
import { Container } from "./styles";

const Curriculum = () => {
  return (
    <MainContainer>
      <Container>
        <SideBar />
        <HomeContent />
      </Container>
    </MainContainer>
  );
};

export default Curriculum;
