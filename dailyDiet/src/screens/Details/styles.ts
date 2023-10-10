import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native";
import { css } from "styled-components/native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GREEN_MID};
`;
export const ContainerBody = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border-top-right-radius: 24px;
  border-top-left-radius: 24px;

  width: 100%;
  padding-top: 32px;
  margin-top: -8px;

  background-color: ${({theme}) => theme.COLORS.GRAY_700};
`;
export const ContainerElements = styled.View`

  height: 312px;
  width: 100%;
  padding: 24px;
`;
export const Describe = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `}

`;

