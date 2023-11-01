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
    <S.Container type="POSITIVE">
      <HeaderDetails title="90.33%" type="POSITIVE" onPress={handleGoBack}/>

      <S.ContainerBody>
        <S.Describe>Estatísticas gerais</S.Describe>

        <S.ContainerElements>
          <StatBox
            title="26"
            subTitle="Melhor sequência de pratos dentro da dieta"
          />

          <StatBox title="109" subTitle="refeições registradas" />

          <S.ContainerStatistic>
            <StatisticResult type="POSITIVE" title="99" subTitle="refeições dentro da dieta" />

            <StatisticResult type="NEGATIVE" title="10" subTitle="refeições fora da dieta" />
          </S.ContainerStatistic>
        </S.ContainerElements>
      </S.ContainerBody>
    </S.Container>
  );
}
