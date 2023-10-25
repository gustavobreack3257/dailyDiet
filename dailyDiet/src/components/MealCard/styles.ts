import styled, { css } from "styled-components/native";
import DividerSvg from "@assets/divider.svg";
import { TextInput, TouchableOpacity, View } from "react-native";

export type CircleStatusTypeStyledProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: CircleStatusTypeStyledProps;
};
export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  padding: 0 12px;
  align-items: center;

  width: 100%;
  height: 52px;
  border-radius: 8px;
  border-width: 1px;
  margin-bottom: 8px;

  border-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const TimetableData = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-right: 12px;
`;
export const ContainerDivider = styled.View`
  margin-right: 12px;
`;
export const ContainerTitle = styled.View`
  flex: 1;
  height: 24px;
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
`;

export const ContainerCircle = styled.View`
  justify-content: center;
  align-items: center;
  height: 24px;
  width: 24px;
`;
export const StatusCircle = styled(View)<Props>`
  height: 14px;
  width: 14px;
  border-radius: 16px;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
