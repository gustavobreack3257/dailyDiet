import styled, { css } from "styled-components/native";

export const Container = styled.View`

`;
export const ContainerDataTitle = styled.View`
  margin-top: 32px;
  margin-bottom: 8px;
`;
export const DateTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;
