import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";
type Props = TouchableOpacityProps & {
  title: string;
  statusCircleType: S.StatusCircleTypeProps;
};
export function StatusDiet({ title, statusCircleType }: Props) {
  return (
    <S.Container>
      <S.ContainerStatusCircle type={statusCircleType}>
      </S.ContainerStatusCircle>

      <S.Title>{title}</S.Title>
    </S.Container>
  );
}
