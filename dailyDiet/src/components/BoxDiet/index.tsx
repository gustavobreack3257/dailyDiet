import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
}
export function BoxDiet({title, ...rest}: Props) {
  return (
    <S.Container>
      <S.ContainerTitle>
        <S.Title>{title}</S.Title>
        <S.SubTitle>das refeições dentro da dieta</S.SubTitle>
      </S.ContainerTitle>

      <S.ContainerIcon {...rest}>
        <S.Icon />
      </S.ContainerIcon>
    </S.Container>
  );
}
