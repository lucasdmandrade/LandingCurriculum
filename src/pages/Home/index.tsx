import React from "react";
import MainContainer from "../../components/MainContainer";
import HomeContent from "./Content";
import SideBar from "./SideBar";
import { Container } from "./styles";

const Home = () => {
  return (
    <MainContainer>
      <SideBar />
      <HomeContent />
    </MainContainer>
  );
};

export default Home;
