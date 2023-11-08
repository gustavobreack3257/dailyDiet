import { Text, TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;

  height: 72px;
  width: 162px;
  margin-top: 24px;
  margin-right: 20px;
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
`;
export const DataInput = styled(TextInput)`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
  height: 48px;
  width: 100%;
  padding: 0px 14px;
  border-width: 1px;

  border-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;
