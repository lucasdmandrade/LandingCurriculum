import { Container, Divisor } from "./styles";

const DivisorComponent = ({
  width,
  justifyContent,
  color,
  removeMargin,
}: {
  width: string;
  justifyContent?: string;
  color?: string;
  removeMargin?: boolean;
}) => {
  return (
    <Container justifyContent={justifyContent}>
      <Divisor width={width} color={color} removeMargin={removeMargin} />
    </Container>
  );
};

export default DivisorComponent;
