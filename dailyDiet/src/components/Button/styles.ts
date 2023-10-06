import { TouchableOpacity, View } from "react-native";
import styled, { css } from "styled-components/native";
import { Plus } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 48px;
    width: 100%;
    border-radius: 6px;
    background-color: ${({theme}) => theme.COLORS.GRAY_200};
`;
export const ContainerTitle = styled.View`
`;
export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.WHITE};
        `};
`;
export const ContainerIcon = styled.View`
    justify-content: center;
    align-items: center;

    height: 18px;
    width: 18px;
    margin-right: 12px;
`;
export const Icon = styled(Plus).attrs(({theme}) => ({
    color: theme.COLORS.WHITE,
    size: theme.FONT_SIZE.LG,
    weight: "bold",
}))``;