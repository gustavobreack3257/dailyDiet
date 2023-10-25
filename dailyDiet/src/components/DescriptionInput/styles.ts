import { Text, TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex-direction: column;

    height: 120px;
    width: 100%;
`;

export const DataInput = styled(TextInput)`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
    `}
    justify-content: flex-start;
    align-items: flex-start;

    height: 120px;
    width: 100%;
    padding: 0px 14px;
    border-width: 1px;

    border-color: ${({theme}) => theme.COLORS.GRAY_500};

`;