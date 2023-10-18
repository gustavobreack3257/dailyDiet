
import { Text, TextInput, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type SelectTypeStyledProps = 'PRIMARY' | 'SECONDARY';
type props = {
  type: SelectTypeStyledProps;
}
export const Container = styled(TouchableOpacity)<props>`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 48px;
    width: 160px;
    border-radius: 8px;

    background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT };
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
`;
