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

  return (
    <Container type={type} isActive={isActive} {...rest}>
      <ContainerCircleFilterType type={type}></ContainerCircleFilterType>
      <Title>{title}</Title>
    </Container>
  );
}
