import { TextInputProps, TouchableOpacityProps } from 'react-native'
import * as S from './styles'

type Props = TextInputProps & {
    title: string;
}
export function DescriptionInput({title, ...rest}: Props){
    return(
        <S.Container>
            <S.ContainerTitle >
                <S.Title>{title}</S.Title>
            </S.ContainerTitle>

            <S.DataInput {...rest} multiline/>
        </S.Container>
    )
}