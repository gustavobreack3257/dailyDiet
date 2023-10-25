import * as S from "./styles";
import DividerSvg from "@assets/divider.svg";

import { TouchableOpacityProps, ViewProps } from "react-native";
import { CircleStatusTypeStyledProps } from "./styles";

type props = ViewProps & TouchableOpacityProps &{
  title: string;
  type?: S.CircleStatusTypeStyledProps;
};
export function MealCard({ title, ...rest }: props) {
  return (
    <S.Container >
      <S.TimetableData>20:08</S.TimetableData>

      <S.ContainerDivider>
        <DividerSvg />
      </S.ContainerDivider>

      <S.ContainerTitle>
        <S.Title>{title}</S.Title>
      </S.ContainerTitle>
      <S.ContainerCircle >
        <S.StatusCircle {...rest}/>
      </S.ContainerCircle>
    </S.Container>
  );
}
