import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";
type Props = TouchableOpacityProps & {
  title: string;
};
export function Header({ title, ...rest }: Props) {
  return (
    <S.Container>
      <S.ContainerTitle>
      <S.ContainerIcon {...rest}>
        <S.Icon />
      </S.ContainerIcon>


        <S.Title>{title}</S.Title>
      </S.ContainerTitle>
    </S.Container>
  );
}
