import { Text, TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex-direction: column;

    height: 72px;
    width: 152px;
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
`;
export const DataInput = styled(TextInput)`
    height: 48px;
    width: 100%;
    border-width: 1px;

    border-color: ${({theme}) => theme.COLORS.GRAY_500};

`;