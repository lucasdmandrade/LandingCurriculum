import styled from "styled-components";

export const Container = styled.div<{ justifyContent?: string }>`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "flex-start"};
`;

export const Divisor = styled.hr<{ width: string; color?: string }>`
  display: flex;
  width: ${({ width }) => width};
  height: 0px;
  background-color: black;
  margin: 30px 0 15px 0;
  border-color: ${({ color }) => color};
`;
