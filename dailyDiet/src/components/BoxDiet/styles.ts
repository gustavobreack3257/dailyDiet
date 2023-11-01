import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";
export type BoxDietColorStyleProps = 'POSITIVE' | 'NEGATIVE';

type Props = {
  typeColor: BoxDietColorStyleProps;
}
export const Container = styled.View<Props>`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 104px;
  padding: 8px;
  margin-bottom: 40px;
  border-radius: 8px;

  background-color: ${({ theme, typeColor }) => typeColor === 'POSITIVE' ? theme.COLORS.GREEN_LIGHT: theme.COLORS.RED_LIGHT};
`;
export const ContainerTitle = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;
export const ContainerIcon = styled(TouchableOpacity)`
  width: 24px;
  height: 100%;

`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.EG}px;
  `}
`;
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, typeColor }) =>
({
  size: theme.FONT_SIZE.MD,
  color: typeColor === 'POSITIVE' ? theme.COLORS.GREEN_DARK: theme.COLORS.RED_DARK
}))``;
