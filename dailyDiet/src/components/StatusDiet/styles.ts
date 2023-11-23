import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView, TouchableOpacity } from "react-native";

import styled, { css } from "styled-components/native";

export type statusCircleTypeProps = 'POSITIVE' | 'NEGATIVE';

type CircleTypeProps = {
  type: statusCircleTypeProps;
}

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 32px;
  width: 144px;
  padding: 4px 16px;
  border-radius: 100%;
  background-color: ${({ theme }) =>theme.COLORS.GRAY_600};
`;
export const ContainerStatusCircle = styled.View<CircleTypeProps>`

  height: 8px;
  width: 8px;
  border-radius: 8px;

  background-color: ${({ theme, type }) => type === 'POSITIVE' ? theme.COLORS.GREEN_DARK: theme.COLORS.RED_DARK};
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
