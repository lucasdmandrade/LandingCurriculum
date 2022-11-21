import React from "react";
import {
  Container,
  EmulatorButton,
  EmulatorButtonContainer,
  EmulatorButtonInside,
  EmulatorContainer,
  EmulatorScreen,
} from "./styles";

const Emulator = () => {
  return (
    <Container>
      <EmulatorContainer>
        <EmulatorScreen src="https://andratech.com.br/" />
        <EmulatorButtonContainer>
          <EmulatorButton>
            <EmulatorButtonInside />
          </EmulatorButton>
        </EmulatorButtonContainer>
      </EmulatorContainer>
    </Container>
  );
};

export default Emulator;
