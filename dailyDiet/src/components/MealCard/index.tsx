import * as S from "./styles";
import DividerSvg from "@assets/divider.svg";

import { ViewProps } from "react-native";
import { CircleStatusTypeStyledProps } from "./styles";

type props = ViewProps & {
  title: string;
  type?: CircleStatusTypeStyledProps;
};
export function MealCard({ title, type = "PRIMARY", ...rest }: props) {
  return (
    <S.Container {...rest}>
      <S.TimetableData>20:08</S.TimetableData>

      <S.ContainerDivider>
        <DividerSvg />
      </S.ContainerDivider>

      <S.ContainerTitle>
        <S.Title>{title}</S.Title>
      </S.ContainerTitle>
      <S.ContainerCircle>
        <S.StatusCircle type={type} />
      </S.ContainerCircle>
    </S.Container>
  );
}
