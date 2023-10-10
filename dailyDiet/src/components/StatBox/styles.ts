import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex-direction: column;

    align-items: center;

    height: 96px;
    width: 100%;
    margin-bottom: 8px;
    border-radius: 8px;
    padding: 16px;

    background-color: ${({theme}) => theme.COLORS.GRAY_600};
`;
export const ContainerTitle = styled.View`
    height: 40px;
    margin-bottom: 8px;

`;
export const ContainerSubTitle = styled.View`
    align-items: center;
    height: 24px;
    width: 100%;
`;
export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.EG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`;
export const SubTitle = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_200};
    `}
`;