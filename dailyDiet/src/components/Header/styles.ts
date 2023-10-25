import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView, TouchableOpacity } from "react-native";

import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  justify-content: center;
  align-items: center;

  height: 136px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;
export const ContainerTitle = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  width: 100%;

`;
export const ContainerIcon = styled(TouchableOpacity)`
  margin-left: 24px;
  width: 30%;
  ;
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.XL,
  color: theme.COLORS.GRAY_200,
}))``;
