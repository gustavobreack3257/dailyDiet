import * as S from "./styles";

import { StatBox } from "@components/StatBox";
import { HeaderDetails } from "@components/HeaderDetails";
import { StatisticResult } from "@components/StatisticResult";
import { useNavigation } from "@react-navigation/native";

export function MealStatisticsDetails() {
  const navigation = useNavigation();

  function handleGoBack(){
    navigation.goBack();
  }
  return (
    <S.Container>
      <HeaderDetails title="90.33%" onPress={handleGoBack}/>

      <S.ContainerBody>
        <S.Describe>Estatísticas gerais</S.Describe>

        <S.ContainerElements>
          <StatBox
            title="26"
            subTitle="Melhor sequência de pratos dentro da dieta"
          />

          <StatBox title="109" subTitle="refeições registradas" />

          <S.ContainerStatistic>
            <StatisticResult type="PRIMARY" title="99" subTitle="refeições dentro da dieta" />

            <StatisticResult type="SECONDARY" title="10" subTitle="refeições fora da dieta" />
          </S.ContainerStatistic>
        </S.ContainerElements>
      </S.ContainerBody>
    </S.Container>
  );
}
