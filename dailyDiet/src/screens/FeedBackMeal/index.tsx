import { Button } from "@components/Button";
import * as S from "./styles";
import PositiveSvg from "@assets/PositiveIllustration.svg";
import NegativeSvg from "@assets/NegativeIllustration.svg"
import { useNavigation } from "@react-navigation/native";
import { TextProps } from "react-native";
import { GroupSelectionProps } from "./styles";
type Props = {
  type?: GroupSelectionProps;
}
export function FeedBackMeal({type = 'Positive'}: Props) {
  const navigation = useNavigation();

  function handleReturnHome(){
    navigation.navigate('home')
  }
  return (
    <S.Container >
      <S.ContainerTitle>
        {
          type === 'Positive' ? <S.Title textColor="Positive">Continue assim</S.Title> : <S.Title textColor="Negative">Que pena!</S.Title>
        }


        {
          type === 'Positive' ?  <S.SubTitle>Você continua<S.SubTitleBold> dentro da dieta.</S.SubTitleBold> Muito
          bem! </S.SubTitle>:  <S.SubTitle> Você <S.SubTitleBold>saiu da dieta </S.SubTitleBold>desse vez, mais continue se esforçando e não desista!
        </S.SubTitle>

        }
      </S.ContainerTitle>

      <S.ContainerImage>
        {
          type === 'Positive' ? <PositiveSvg/> : <NegativeSvg/>
        }

      </S.ContainerImage>

      <S.ContainerButton>
        <Button title="ir para pagina inicial" onPress={handleReturnHome}/>
      </S.ContainerButton>
    </S.Container>
  );
}
