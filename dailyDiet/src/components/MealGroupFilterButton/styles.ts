
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styled, { css } from "styled-components/native";

export type FilterTypeStylesProps = {
  type: 'PRIMARY' | 'SECONDARY';
  isActive?: boolean;
}
export const Container = styled(TouchableOpacity)<FilterTypeStylesProps>`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 52px;
    width: 168px;
    margin-right: 8px;
    border-radius: 8px;

    background-color: ${({theme, isActive, type}) => isActive && type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT: isActive && type === 'SECONDARY' ? theme.COLORS.RED_LIGHT: theme.COLORS.GRAY_600};

    border: ${({theme, isActive, type}) => isActive && type === 'PRIMARY' ? theme.COLORS.GREEN_DARK: isActive && type === 'SECONDARY' ? theme.COLORS.RED_DARK: theme.COLORS.GRAY_600};
`;
export const ContainerCircleFilterType = styled(View)<FilterTypeStylesProps>`
  height: 8px;
  width: 8px;
  border-radius: 16px;
  margin-right: 8px;

  background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
  };
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
`;
