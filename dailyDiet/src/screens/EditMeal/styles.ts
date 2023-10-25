import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;

  background-color: ${({theme}) => theme.COLORS.GRAY_700};
`;
export const ContainerTitle = styled.View`
  flex-direction: column;
  align-items: center;

  height: 64px;
  width: 100%;
  margin-top: 136px;

`;
export const ContainerImage = styled.View`
  justify-content: center;
  align-items: center;

  height: 288px;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 32px;
`;
export const ContainerButton = styled.View`
  justify-content: center;
  align-items: center;

  height: 56px;
  width: 100%;
  margin-top: 32px;
  padding: 0px 88px;

`;
export const SubTitleBold = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
export const SubTitle = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
export const Title = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GREEN_DARK};
  `}
`;

