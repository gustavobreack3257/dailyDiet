import { Text, TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex-direction: column;

    height: 48px;
    width: 100%;
`;
export const DataInput = styled(TextInput)`
    height: 48px;
    width: 100%;
    border-width: 1px;

    border-color: ${({theme}) => theme.COLORS.GRAY_500};

`;