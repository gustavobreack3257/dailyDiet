import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";
import { ColorTypeStyleProps } from "./styles";

type Props = TouchableOpacityProps &
   {
    showIcon?: boolean;
    iconType?: 'PRIMARY' | 'SECONDARY' | 'TERTIARY';
    buttonType?: ColorTypeStyleProps;
    titleType?: ColorTypeStyleProps;
    title: string;
  };
export function Button({title, showIcon = false, iconType = "PRIMARY", buttonType, titleType = 'PRIMARY', ...rest}: Props) {
  return (
    <S.Container buttonType={buttonType}  {...rest}>
      {showIcon ? (
        <S.ContainerIcon>
          {iconType === "PRIMARY" ? (
            <S.IconAdd />
          ) : iconType === "SECONDARY" ? (
            <S.IconEdit />
          ) : iconType === "TERTIARY" ? (
            <S.IconDelete />
          ) : null}
        </S.ContainerIcon>
      ) : null}

        <S.Title titleType={titleType} >{title}</S.Title>

    </S.Container>
  );
}
