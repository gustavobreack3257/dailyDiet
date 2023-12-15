import { TextInputProps } from 'react-native';
import * as S from './styles'
import { useTheme } from 'styled-components/native';

type Props = TextInputProps & {
    title: string;
}
export function InputData({title, ...rest}: Props){
    const {COLORS} = useTheme();
    return(
        <S.Container>
            <S.Title>
                {title}
            </S.Title>

            <S.DataInput placeholderTextColor={COLORS.GRAY_400} {...rest}/>
        </S.Container>
    )
}