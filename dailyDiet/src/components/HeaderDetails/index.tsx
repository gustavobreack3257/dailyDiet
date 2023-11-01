import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type Props = TouchableOpacityProps & {
  type?: S.ContainerColorStyleType;
  title: string;
};
export function HeaderDetails({title, type='POSITIVE', ...rest}:Props) {
  return (
    <S.Container type={type}>
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
