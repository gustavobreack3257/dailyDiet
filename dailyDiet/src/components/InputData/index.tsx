import { TextInputProps } from 'react-native';
import * as S from './styles'

type Props = TextInputProps & {
    title: string;
}
export function InputData({title, ...rest}: Props){
    return(
        <S.Container>
            <S.Title>
                {title}
            </S.Title>

            <S.DataInput {...rest}/>
        </S.Container>
    )
}