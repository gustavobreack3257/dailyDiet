import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
}
export function Button({title, ...rest}: Props) {
  return (
    <S.Container {...rest}>
      <S.ContainerIcon>
        <S.Icon />
      </S.ContainerIcon>

      <S.ContainerTitle>
        <S.Title>{title}</S.Title>
      </S.ContainerTitle>
    </S.Container>
  );
}
