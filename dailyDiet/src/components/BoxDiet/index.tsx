import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type Props = TouchableOpacityProps & {
  typeColor?: S.BoxDietColorStyleProps;
  title: string;
}
export function BoxDiet({title, typeColor = 'POSITIVE', ...rest}: Props) {
  return (
    <S.Container typeColor={typeColor}>
      {
        !!title ? (
          <S.ContainerTitle>
          <S.Title>{title}</S.Title>
          <S.SubTitle>das refeições dentro da dieta</S.SubTitle>
        </S.ContainerTitle>
        ):(
          <S.ContainerTitle>

          <S.SubTitle>Ainda não existem métricas</S.SubTitle>
        </S.ContainerTitle>
        )
      }


      <S.ContainerIcon {...rest}>
        <S.Icon typeColor={typeColor}/>
      </S.ContainerIcon>
    </S.Container>
  );
}
