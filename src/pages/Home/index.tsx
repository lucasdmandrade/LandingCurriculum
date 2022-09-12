import React from "react";
import HomeContent from "./Content";
import SideBar from "./SideBar";
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
