import * as S from "./styles";

import { StatBox } from "@components/StatBox";
import { HeaderDetails } from "@components/HeaderDetails";
import { StatisticResult } from "@components/StatisticResult";
export function Details() {
  return (
    <S.Container>
      <HeaderDetails />

      <S.ContainerBody>
        <S.Describe>Estatísticas gerais</S.Describe>

        <S.ContainerElements>
          <StatBox
            title="26"
            subTitle="Melhor sequência de pratos dentro da dieta"
          />

          <StatBox title="109" subTitle="refeições registradas" />

          <S.ContainerStatistic>
            <StatisticResult title="99" subTitle="refeições dentro da dieta" />

            <StatisticResult title="10" subTitle="refeições fora da dieta" />
          </S.ContainerStatistic>
        </S.ContainerElements>
      </S.ContainerBody>
    </S.Container>
  );
}
