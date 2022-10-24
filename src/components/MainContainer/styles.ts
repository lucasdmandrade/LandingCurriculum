import styled from "styled-components";
import { fontDefaultLigth } from "../../theme/text";

export const Container = styled.div<{ RemovePadding?: boolean }>`
  display: flex;
  flex-direction: column;
  margin: 0;
  font-family: ${fontDefaultLigth};
  font-weight: lighter;
  padding-top: ${({ RemovePadding }) => (RemovePadding ? 0 : "50px")};
`;
