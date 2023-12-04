import { SafeAreaView, Text } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 64px 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-bottom: 8px;
`;
