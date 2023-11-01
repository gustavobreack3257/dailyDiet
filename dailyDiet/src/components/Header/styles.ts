import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView, TouchableOpacity } from "react-native";

import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  padding: 48px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;
export const ContainerTitle = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  height: 40px;
  margin-top: 32px;


`;
export const ContainerIcon = styled(TouchableOpacity)`
  margin-top: 32px;
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
