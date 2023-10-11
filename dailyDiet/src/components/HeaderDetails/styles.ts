import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  height: 200px;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;
export const ContainerIcon = styled.View`
  margin-left: 24px;
  margin-right: 40px;
  padding-top: 56px;

  height: 100%;
  width: 32px;
`;
export const ContainerTitle = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 48px;
  width: 60%;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.BG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.EG,
  color: theme.COLORS.GREEN_DARK,
}))``;
