import { TouchableOpacityProps, ViewProps } from "react-native";
import {
  Container,
  Title,
  ContainerCircleFilterType,
  FilterTypeStylesProps,
} from "./styles";
import { useState } from "react";

type Props = TouchableOpacityProps & FilterTypeStylesProps & ViewProps &
   {
    title: string;
  };
export function MealGroupFilterButton({title, type = 'PRIMARY', isActive = false, ...rest}: Props) {
  const [onActive, setOnActive] = useState(isActive);
  return (
    <Container type={type} onPress={() => setOnActive(prevState => !prevState)} isActive={onActive} {...rest}>
      <ContainerCircleFilterType type={type}></ContainerCircleFilterType>
      <Title>{title}</Title>
    </Container>
  );
}
