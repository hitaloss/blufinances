import React from "react";
import { Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  text: string;
}

function Button({ text, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{text}</Title>
    </Container>
  );
}
export default Button;