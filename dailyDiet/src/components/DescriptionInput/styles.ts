import { Text, TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex-direction: column;

    height: 150px;
    width: 100%;
    margin-top: 24px;
`;
export const ContainerTitle = styled.View`
  height: 24px;
  width: 100%;


`;
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
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
    padding: 16px;
    border-width: 1px;

    border-color: ${({theme}) => theme.COLORS.GRAY_500};

`;