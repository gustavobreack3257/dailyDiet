import { ArrowLeft } from "phosphor-react-native";
import { SafeAreaView } from "react-native";
import { css } from "styled-components/native";
import styled from "styled-components/native";

export type ContainerColorStyleType = 'POSITIVE' | 'NEGATIVE'
type ContainerColorStyleTypeProps = {
  type: ContainerColorStyleType;
}
export const Container = styled.View<ContainerColorStyleTypeProps>`
  flex: 1;

  background-color: ${({ theme, type }) => type === 'POSITIVE' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
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

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;
export const ContainerElements = styled.View`
  height: 62%;
  width: 100%;
  padding: 24px;
`;
export const ContainerStatistic = styled.View`
  justify-content: space-between;
  flex-direction: row;
  height: 104px;
  width: 100%;
`;
export const Describe = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`;
