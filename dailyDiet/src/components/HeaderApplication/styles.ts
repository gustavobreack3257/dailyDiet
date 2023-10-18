import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native";

import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 136px;
  width: 100%;


  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;
export const ContainerTitle = styled.View`
  flex: 1;
  align-items: center;

  margin-right: 24px;
`;
export const ContainerIcon = styled.View`
  margin-left: 24px;

`;
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.XL,
  color: theme.COLORS.GRAY_200,
}))``;
