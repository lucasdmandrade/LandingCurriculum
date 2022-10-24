import { Container } from "./styles";

const MainContainer = ({
  children,
  RemovePadding,
}: {
  children: React.ReactNode;
  RemovePadding?: boolean;
}) => {
  return <Container RemovePadding={RemovePadding}>{children}</Container>;
};

export default MainContainer;
