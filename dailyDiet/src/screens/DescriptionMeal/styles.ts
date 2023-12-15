import { Platform } from "react-native";
import styled, { css } from "styled-components/native";

export type SelectColorTypeProps = 'PRIMARY' | 'SECONDARY' | null;

type Props = {
  type: SelectColorTypeProps;
}
export const Container = styled.View<Props>`
  flex: 1;

  background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT: type === 'SECONDARY' ? theme.COLORS.RED_LIGHT: theme.COLORS.GRAY_500};
`;
export const ContainerBody = styled.View`
  height:  ${Platform.OS === 'ios' ? 80 : 85}%;
  width: 100%;
  padding: 40px 24px;
  border-top-right-radius: 24px;
  border-top-left-radius:24px;

  background-color: ${({theme}) => theme.COLORS.GRAY_700};
`;
export const ContainerElements = styled.View`
  height: 208px;
  width: 100%;
  margin-bottom: 85%;


`;
export const ContainerTextMeal = styled.View`
  height: 76px;
  width: 100%;
  margin-bottom: 24px;


`;
export const ContainerDescriptionText = styled.View`
  height: 48px;
  width: 100%;
  margin-bottom: 24px;


`;
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.YG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;
export const TitleDataAndHour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
export const SubTitleDataAndHour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;