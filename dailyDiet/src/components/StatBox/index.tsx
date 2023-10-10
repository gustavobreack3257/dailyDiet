import * as S from './styles'

type Props = {
    title: string;
    subTitle: string;
}
export function StatBox({title, subTitle}: Props){
    return(
        <S.Container >
            <S.ContainerTitle>
                <S.Title>{title}</S.Title>
            </S.ContainerTitle>

            <S.ContainerSubTitle>
                <S.SubTitle>
                    {subTitle}
                </S.SubTitle>
            </S.ContainerSubTitle>
        </S.Container>
    )
}