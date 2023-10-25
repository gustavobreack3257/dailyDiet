import { Button } from "@components/Button";
import * as S from "./styles";
import PositiveSvg from "@assets/PositiveIllustration.svg";
import { useNavigation } from "@react-navigation/native";

export function FeedBackMeal() {
  const navigation = useNavigation();

  function handleReturnHome(){
    navigation.navigate('home')
  }
  return (
    <S.Container>
      <S.ContainerTitle>
        <S.Title>Continue assim!</S.Title>

        <S.SubTitle>
          Você continua<S.SubTitleBold> dentro da dieta.</S.SubTitleBold> Muito
          bem!
        </S.SubTitle>
      </S.ContainerTitle>

      <S.ContainerImage>
        <PositiveSvg />
      </S.ContainerImage>

      <S.ContainerButton>
        <Button title="ir para pagina inicial" onPress={handleReturnHome}/>
      </S.ContainerButton>
    </S.Container>
  );
}
