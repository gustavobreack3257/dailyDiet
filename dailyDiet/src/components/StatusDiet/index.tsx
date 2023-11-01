import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";
type Props = TouchableOpacityProps & {
  title: string;
};
export function StatusDiet({ title }: Props) {
  return (
    <S.Container>
      <S.ContainerStatusCircle>
      </S.ContainerStatusCircle>

      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
