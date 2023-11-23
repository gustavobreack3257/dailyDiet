import * as S from "./styles";
import DividerSvg from "@assets/divider.svg";

import { TouchableOpacityProps, ViewProps } from "react-native";


type props = ViewProps & TouchableOpacityProps &{
  title: string;
  hour: string;
  circleStatusType?: S.CircleStatusTypeStyledProps;
};
export function MealCard({ title, hour, circleStatusType='POSITIVE',...rest }: props) {
  return (
    <S.Container {...rest}>
      <S.TimetableData>{hour}</S.TimetableData>

      <S.ContainerDivider>
        <DividerSvg />
      </S.ContainerDivider>

      <S.ContainerTitle>
        <S.Title numberOfLines={1}>{title}</S.Title>
      </S.ContainerTitle>
      <S.ContainerCircle >
        <S.StatusCircle type={circleStatusType} {...rest}/>
      </S.ContainerCircle>
    </S.Container>
  );
}
