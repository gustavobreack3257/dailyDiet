import { TextInputProps, TouchableOpacityProps } from 'react-native'
import * as S from './styles'
import { useTheme } from 'styled-components/native';

type Props = TextInputProps & {
    title: string;
}
export function DescriptionInput({title, ...rest}: Props){
    const { COLORS } = useTheme();
    return(
        <S.Container>
            <S.ContainerTitle >
                <S.Title>{title}</S.Title>
            </S.ContainerTitle>

            <S.DataInput {...rest} placeholderTextColor={COLORS.GRAY_400} multiline style={{textAlignVertical: 'top'}} />
        </S.Container>
    )
}