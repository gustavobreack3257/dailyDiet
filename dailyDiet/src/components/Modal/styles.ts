import { Button } from '@components/Button';
import { TouchableOpacity } from 'react-native';
import { css } from 'styled-components';
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 0px 24px;

    background-color: 'rgba(0, 0, 0, 0.5)';
`
export const innerContainer = styled.View`
    justify-content: center;
    align-items: center;

    height: 200px;
    width: 100%;
    padding: 0px 10px;
    border-radius: 8px;

    background-color: ${({theme}) => theme.COLORS.WHITE_ICE};
`;
export const ContainerButton = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-top: 24px;
    width: 87%;
`;
export const CancelButton = styled(TouchableOpacity)`
    justify-content: center;
    align-items: center;

    width: 136px;
    padding: 10px;
    margin-top: 10px;
    border-width: 1px;
    border-radius: 6px;
    border-color: ${({theme}) => theme.COLORS.GRAY_100};

    background-color: ${({theme}) => theme.COLORS.WHITE_ICE};
`
export const ConfirmButton = styled(TouchableOpacity)`
    justify-content: center;
    align-items: center;

    width: 136px;
    padding: 10px;
    margin-top: 10px;
    border-width: 1px;
    border-radius: 6px;
    border-color: ${({theme}) => theme.COLORS.GRAY_100};

    background-color: ${({theme}) => theme.COLORS.GRAY_200};
`
export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
    text-align: center;
    margin-top: 22px;
`
export const TextCancel = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`
export const TextConfirm = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.WHITE_ICE};
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`