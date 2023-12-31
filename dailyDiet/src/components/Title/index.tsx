import * as S from './styles'

type Props = {
    title:string;
}
export function Title({title}: Props){
    return(
        <S.Container>
            <S.Title>
                {title}
            </S.Title>
        </S.Container>
    )
}