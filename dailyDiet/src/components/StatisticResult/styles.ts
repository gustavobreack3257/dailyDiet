import { View } from "react-native";
import styled, { css } from "styled-components/native";

export type SelectTypeColorProps = 'POSITIVE' | 'NEGATIVE';

type props = {
  type: SelectTypeColorProps;
}
export const Container = styled(View)<props>`
  flex-direction: column;
  align-items: center;
  padding: 16px;

  height: 112px;
  width: 48%;
  border-radius: 8px;

  background-color: ${({ theme, type }) => type === 'POSITIVE' ? theme.COLORS.GREEN_LIGHT: theme.COLORS.RED_LIGHT};
`;
export const ContainerTitle = styled.View`
  margin-bottom: 8px;
`;
export const ContainerSubTitle = styled.View`
  align-items: center;
  width: 100%;
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
  text-align: center;
`;
