import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};
export function HeaderDetails({title, ...rest}:Props) {
  return (
    <S.Container>
      <S.ContainerIcon {...rest}>
        <S.Icon />
      </S.ContainerIcon>

      <S.ContainerTitle>
        <S.Title>{title}</S.Title>

        <S.SubTitle>das refeições dentro da dieta</S.SubTitle>
      </S.ContainerTitle>
    </S.Container>
  );
}
