import { Text } from "react-native";
import styled, { css } from "styled-components/native";

export type GroupSelectionProps = 'Positive' | 'Negative';
type Props = {
  textColor: GroupSelectionProps;
}
export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  padding: 0px 32px;

  background-color: ${({theme}) => theme.COLORS.GRAY_700};
`;
export const ContainerTitle = styled.View`
  flex-direction: column;
  align-items: center;

  height: 64px;
  width: 100%;
  margin-top: 136px;

`;
export const ContainerImage = styled.View`
  justify-content: center;
  align-items: center;

  height: 288px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 32px;
`;
export const ContainerButton = styled.View`
  justify-content: center;
  align-items: center;

  height: 56px;
  width: 100%;
  margin-top: 32px;
  padding: 0px 64px;

`;
export const SubTitleBold = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
export const SubTitle = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
  text-align: center;
`;
export const Title = styled.Text<Props>`
  ${({theme, textColor}) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${textColor === 'Positive' ? theme.COLORS.GREEN_DARK: theme.COLORS.RED_DARK};
  `}
`;

