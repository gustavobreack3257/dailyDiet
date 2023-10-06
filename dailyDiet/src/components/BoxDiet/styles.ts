import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native'
import {ArrowUpRight} from 'phosphor-react-native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 8px 8px;

  width: 100%;
  height: 104px;
  margin-bottom: 40px;
  border-radius: 8px;

  background-color: ${({theme}) => theme.COLORS.GREEN_LIGHT};
`;
export const ContainerTitle = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const ContainerIcon = styled(TouchableOpacity)`
  width: 24px;
  height: 24px;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.BG}px;
  `}
`;
export const SubTitle = styled.Text`

  ${({theme}) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
export const Icon = styled(ArrowUpRight).attrs(({theme}) => ({
  size: theme.FONT_SIZE.XL,
  color: theme.COLORS.GREEN_DARK
}))``;