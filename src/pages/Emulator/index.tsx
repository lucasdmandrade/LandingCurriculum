import React from "react";
import {
  Container,
  EmulatorButton,
  EmulatorButtonContainer,
  EmulatorContainer,
  EmulatorScreen,
} from "./styles";

const Emulator = () => {
  return (
    <Container>
      <EmulatorContainer>
        <EmulatorScreen src="https://andratech.com.br/" />
        <EmulatorButtonContainer>
          <EmulatorButton />
        </EmulatorButtonContainer>
      </EmulatorContainer>
    </Container>
  );
};

export default Emulator;
