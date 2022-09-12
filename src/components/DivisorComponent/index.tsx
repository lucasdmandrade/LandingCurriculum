import { Container, Divisor } from "./styles";

const DivisorComponent = ({
  width,
  justifyContent,
  color,
}: {
  width: string;
  justifyContent?: string;
  color?: string;
}) => {
  return (
    <Container justifyContent={justifyContent}>
      <Divisor width={width} color={color} />
    </Container>
  );
};

export default DivisorComponent;
