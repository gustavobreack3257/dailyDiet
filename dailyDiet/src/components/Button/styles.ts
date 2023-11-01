import { Theme } from "./../../styles/theme";
import { TouchableOpacity, View } from "react-native";
import styled, { css } from "styled-components/native";
import { Plus, PencilSimpleLine, Trash } from "phosphor-react-native";

export type ColorTypeStyleProps = "PRIMARY" | "SECONDARY";
type ButtonColorTypeStyleProps = {
  buttonType?: ColorTypeStyleProps;
};

type TitleColorTypeStyleProps = {
  titleType?: ColorTypeStyleProps;
}
export const Container = styled(TouchableOpacity)<ButtonColorTypeStyleProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 48px;
  width: 100%;
  margin-bottom: 8px;
  border-radius: 6px;
  border-width: 1px;

  background-color: ${({ theme, buttonType }) =>
    buttonType === "PRIMARY"
      ? theme.COLORS.GRAY_200
      : buttonType === "SECONDARY"
      ? theme.COLORS.WHITE
      : theme.COLORS.GRAY_200};

  border-color: ${({ theme, buttonType }) =>
    buttonType === "PRIMARY"
      ? theme.COLORS.GRAY_200
      : buttonType === "SECONDARY"
      ? theme.COLORS.GRAY_100
      : theme.COLORS.GRAY_200};
`;
export const Title = styled.Text<TitleColorTypeStyleProps>`
  ${({ theme, titleType }) =>
   titleType &&
    css`
      font-family: ${theme.FONT_FAMILY.BOLD};
      font-size: ${theme.FONT_SIZE.SM}px;
      color: ${ titleType === "PRIMARY"
        ? theme.COLORS.WHITE
        : titleType === "SECONDARY"
        ? theme.COLORS.GRAY_100
        : theme.COLORS.WHITE};
    `}
`;
export const ContainerIcon = styled.View`
  justify-content: center;
  align-items: center;

  height: 18px;
  width: 18px;
  margin-right: 12px;
`;
export const IconAdd = styled(Plus).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: theme.FONT_SIZE.MD,
  weight: "bold",
}))``;
export const IconEdit = styled(PencilSimpleLine).attrs(({ theme }) => ({
  color: theme.COLORS.WHITE,
  size: theme.FONT_SIZE.MD,
  weight: "bold",
}))``;
export const IconDelete = styled(Trash).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_100,
  size: theme.FONT_SIZE.MD,
  weight: "bold",
}))``;
