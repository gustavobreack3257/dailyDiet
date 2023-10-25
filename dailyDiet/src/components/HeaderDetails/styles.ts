import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 168px;
  width: 100%;
  padding: 0px 24px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;
export const ContainerIcon = styled(TouchableOpacity)`
  padding-top: 56px;

  height: 100%;
`;
export const ContainerTitle = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  margin-top: 40px;

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
`;
export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  size: theme.FONT_SIZE.XL,
  color: theme.COLORS.GREEN_DARK,
}))``;
