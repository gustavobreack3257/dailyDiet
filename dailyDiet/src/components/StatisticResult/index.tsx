import { ViewProps } from "react-native";
import * as S from "./styles";

type Props = ViewProps &{
  title: string;
  subTitle: string;
  type?: S.SelectTypeColorProps;
};
export function StatisticResult({ title, subTitle, ...rest}: Props) {
  return (
    <S.Container {...rest} >
      <S.ContainerTitle>
        <S.Title>{title}</S.Title>
      </S.ContainerTitle>

      <S.ContainerSubTitle>
        <S.SubTitle>{subTitle}</S.SubTitle>
      </S.ContainerSubTitle>
    </S.Container>
  );
}
