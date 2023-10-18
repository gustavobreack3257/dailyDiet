import { TouchableOpacityProps } from 'react-native';
import * as S from './styles'
import { SelectTypeStyledProps } from './styles';

type Props = TouchableOpacityProps & {
    title: string;
    type?: SelectTypeStyledProps;
};
export function SelectDiet({title, type = 'PRIMARY' , ...rest}: Props){
    return(
        <S.Container type={type} {...rest} >
            <S.Title>
                {title}
            </S.Title>
        </S.Container>
    )
}