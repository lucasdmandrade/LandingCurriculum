import { Container, Divisor } from "./styles";

const DivisorComponent = ({
  width,
  justifyContent,
}: {
  width: string;
  justifyContent?: string;
}) => {
  return (
    <Container justifyContent={justifyContent}>
      <Divisor width={width} />
    </Container>
  );
};

export default DivisorComponent;
