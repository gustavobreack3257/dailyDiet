import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
  align-items: center;
  padding: 16px;

  height: 104px;
  width: 48%;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;
export const ContainerTitle = styled.View`
  height: 40px;
  margin-bottom: 8px;
`;
export const ContainerSubTitle = styled.View`
  align-items: center;
  height: 40px;
  width: 100%;
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.EG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
  text-align: center;
`;
