import * as S from './styles'

type Props = {
    title: string;
}
export function InputData({title}: Props){
    return(
        <S.Container>
            <S.Title>
                {title}
            </S.Title>

            <S.DataInput/>
        </S.Container>
    )
}