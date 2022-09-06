import React from "react";
import HomeContent from "../../components/Home/Content";
import SideBar from "../../components/Home/SideBar";
import { Container } from "./styles";

const Home = () => {
  return (
    <Container>
      <SideBar />
      <HomeContent />
    </Container>
  );
};

export default Home;
