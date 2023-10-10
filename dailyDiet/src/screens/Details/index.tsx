import * as S from "./styles";

import { StatBox } from "@components/StatBox";
import {HeaderDetails } from "@components/HeaderDetails";
export function Details(){
    return(
        <S.Container>
            <HeaderDetails/>

            <S.ContainerBody>
                <S.Describe>
                    Estatísticas gerais
                </S.Describe>

                <S.ContainerElements>
                    <StatBox title="26" subTitle="Melhor sequencia de pratos dentro da dieta"/>

                    <StatBox title="109" subTitle="refeições registradas"/>
                </S.ContainerElements>
            </S.ContainerBody>
        </S.Container>
    )
}