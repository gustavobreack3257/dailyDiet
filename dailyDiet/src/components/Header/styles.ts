import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView, TouchableOpacity, Platform } from "react-native";

import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;

  padding-top: ${Platform.OS === 'ios' ? 56 : 24}px;
  width: 100%;


`;
export const ContainerTitle = styled.View`
  height: 24px;
`;
export const ContainerIcon = styled(TouchableOpacity)`
  height: 24px;

  margin-right:  ${Platform.OS === 'ios' ? 120 : 104}px;
  margin-left: 24px;
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
