import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type: S.IconColorStyleType
};
export function HeaderDetails({title, type = 'POSITIVE', ...rest}:Props) {
  return (
    <S.Container >
      <S.ContainerIcon {...rest}>
        <S.Icon iconColor={type}/>
      </S.ContainerIcon>

      <S.ContainerTitle>
        <S.Title>{title}</S.Title>

        <S.SubTitle>das refeições dentro da dieta</S.SubTitle>
      </S.ContainerTitle>
    </S.Container>
  );
}
