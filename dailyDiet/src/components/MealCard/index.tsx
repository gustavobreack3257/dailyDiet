import * as S from "./styles";
import DividerSvg from "@assets/divider.svg";

import { TouchableOpacityProps, ViewProps } from "react-native";


type props = ViewProps & TouchableOpacityProps &{
  title: string;
  hour: string;
  type?: S.CircleStatusTypeStyledProps;
};
export function MealCard({ title, hour, type='POSITIVE',...rest }: props) {
  return (
    <S.Container {...rest}>
      <S.TimetableData>{hour}</S.TimetableData>

      <S.ContainerDivider>
        <DividerSvg />
      </S.ContainerDivider>

      <S.ContainerTitle>
        <S.Title>{title}</S.Title>
      </S.ContainerTitle>
      <S.ContainerCircle >
        <S.StatusCircle type={type} {...rest}/>
      </S.ContainerCircle>
    </S.Container>
  );
}
